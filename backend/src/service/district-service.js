import database from "../application/database.js";
import ErrorResponse from "../error/error-response.js";
import {validate} from "../validation/validation.js";
import {CategoryValidation} from "../validation/category-validation.js";
import slugify from "slugify";
import {DistrictValidation} from "../validation/district-validation.js";

export class DistrictService {
  static async get (slug) {
    const district = await database.district.findUnique({ where: { slug }});
    if (!district) throw new ErrorResponse(404, 'district not found');
    return district;
  }
  static async gets (query) {
    return database.district.findMany({
      where: {
        AND: [
          { name: { contains: query.name, mode: "insensitive" }}
        ]
      }
    })
  }
  static async create (request) {
    const districtRequest = validate(DistrictValidation.createDistrictValidation, request);
    const districtNameCheck = await database.district.findMany({ where: {name: districtRequest.name}});
    if (districtNameCheck.length >= 1) throw new ErrorResponse('401', 'district already exist');
    districtRequest.slug = slugify(`${districtRequest.name} ${new Date().getTime().toString()}`, {
      lower: true,
      replacement: '-'
    });
    return database.district.create({ data: districtRequest });
  }
  static async update (slug, request) {
    if(!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const districtRequest = validate(DistrictValidation.updateDistrictValidation, request);
    const district = await database.district.findUnique({ where: { slug } });
    if (!district) throw new ErrorResponse(404, 'category not found');

    if (districtRequest.name) {
      const districtNameCheck = await database.district.findMany({ where: {name: districtRequest.name}});
      if (districtNameCheck >= 1) throw new ErrorResponse('401', 'district already exist');
      districtRequest.slug = slugify(`${districtRequest.name} ${new Date().getTime().toString()}`, {
        lower: true,
        replacement: '-'
      });
    }
    return database.district.update({ where: { slug }, data: districtRequest, select: { name: true }})
  }
  static async delete (slug) {
    if(!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const district = await database.district.findUnique({ where: { slug } });
    if (!district) throw new ErrorResponse(404, 'category not found');
    return database.district.delete({ where: { slug }, select: { name: true }})
  }
}