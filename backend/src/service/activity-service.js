import {validate} from "../validation/validation.js";
import database from "../application/database.js";
import ErrorResponse from "../error/error-response.js";
import slugify from "slugify";
import {ActivityValidation} from "../validation/activity-validation.js";

export class ActivityService {
  static async get(slug) {
    const request = validate(ActivityValidation.getActivityValidation, slug);
    const activity = await database.activity.findUnique({ where: { slug: request }, include: { district: true }});
    if (!activity) throw  new ErrorResponse(404, 'activity not found');
    return activity;
  }
  static async gets(query) {
    return database.activity.findMany({
      where: {
        AND: [
          { name: { contains: query.name, mode: 'insensitive' }}
        ]
      },
      include: {
        district: true
      }
    })
  }
  static async create(request) {
    const activityRequest = validate(ActivityValidation.createActivityValidation, request);
    activityRequest.slug = slugify(`${activityRequest.name} ${new Date().getTime().toString()}`, { lower: true, replacement: '-' });
    return database.activity.create({ data: activityRequest, select: { name: true }})
  }
  static async update(slug, request) {
    if (!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const activityRequest = validate(ActivityValidation.updateActivityValidation, request);
    const activity = await database.activity.findUnique({ where: { slug }});
    if (!activity) throw new ErrorResponse(404, 'activity not found');
    if (activityRequest.name) {
      activityRequest.slug = slugify(`${activityRequest.name} ${new Date().getTime().toString()}`, { lower: true, replacement: '-' });
    }
    return database.activity.update({ where: { slug }, data: activityRequest, select: { name: true }});
  }
  static async delete(slug) {
    if (!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const activity = await database.activity.findUnique({ where: { slug }});
    if (!activity) throw new ErrorResponse(404, 'activity not found');
    return database.activity.delete({ where: { slug }, select: { name: true }});
  }
}