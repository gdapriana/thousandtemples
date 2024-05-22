import {validate} from "../validation/validation.js";
import {DestinationValidation} from "../validation/destination-validation.js";
import database from "../application/database.js";
import ErrorResponse from "../error/error-response.js";
import slugify from "slugify";

export class DestinationService {
  static async get(slug) {
    const request = validate(DestinationValidation.getDestinationValidation, slug);
    const destination = await database.destination.findUnique({ where: { slug: request }, include: { category: true, district: true }});
    if (!destination) throw  new ErrorResponse(404, 'destination not found');
    return destination;
  }
  static async gets(query) {
    return database.destination.findMany({
      where: {
        AND: [
          { name: { contains: query.name, mode: 'insensitive' }}
        ]
      },
      include: {
        category: true,
        district: true
      }
    })
  }
  static async create(request) {
    const destinationRequest = validate(DestinationValidation.createDestinationValidation, request);
    destinationRequest.latitude = parseFloat(destinationRequest.latitude)
    destinationRequest.longitude = parseFloat(destinationRequest.longitude)
    if (isNaN(destinationRequest.latitude) || isNaN.longitude) throw new ErrorResponse(401, 'Latitude or Longitude should be number')
    destinationRequest.slug = slugify(`${destinationRequest.name} ${new Date().getTime().toString()}`, { lower: true, replacement: '-' });
    return database.destination.create({ data: destinationRequest, select: { name: true }})
  }
  static async update(slug, request) {
    if (!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const destinationRequest = validate(DestinationValidation.updateDestinationValidation, request);
    destinationRequest.latitude = parseFloat(destinationRequest.latitude)
    destinationRequest.longitude = parseFloat(destinationRequest.longitude)
    if (isNaN(destinationRequest.latitude) || isNaN.longitude) throw new ErrorResponse(401, 'Latitude or Longitude should be number')
    const destination = await database.destination.findUnique({ where: { slug }});
    if (!destination) throw new ErrorResponse(404, 'destination not found');
    if (destinationRequest.name) {
      destinationRequest.slug = slugify(`${destinationRequest.name} ${new Date().getTime().toString()}`, { lower: true, replacement: '-' });
    }
    return database.destination.update({ where: { slug }, data: destinationRequest, select: { name: true }});
  }
  static async delete(slug) {
    if (!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const destination = await database.destination.findUnique({ where: { slug }});
    if (!destination) throw new ErrorResponse(404, 'destination not found');
    return database.destination.delete({ where: { slug }, select: { name: true }});
  }
}