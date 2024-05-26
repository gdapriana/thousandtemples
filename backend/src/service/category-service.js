import database from "../application/database.js";
import ErrorResponse from "../error/error-response.js";
import {CategoryValidation} from "../validation/category-validation.js";
import {validate} from "../validation/validation.js";
import slugify from "slugify";
import {DistrictValidation} from "../validation/district-validation.js";

export class CategoryService {
  static async get(slug) {
    const category = await database.category.findUnique({ where: { slug }});
    if (!category) throw new ErrorResponse(404, 'category not found');
    return category;
  }
  static async gets(query) {
    return database.category.findMany({
      where: {
        AND: [
          { name: { contains: query.name, mode: 'insensitive' }}
        ]
      }
    })
  }
  static async create(request) {
    const categoryRequest = validate(CategoryValidation.createCategoryValidation, request);
    const categoryNameCheck = await database.category.findMany({ where: {name: categoryRequest.name}});
    if (categoryNameCheck >= 1) throw new ErrorResponse('401', 'category already exist');
    categoryRequest.slug = slugify(`${categoryRequest.name} ${new Date().getTime().toString()}`, {
      lower: true,
      replacement: '-'
    });
    return database.category.create({ data: categoryRequest });
  }
  static async update(slug, request) {
    if(!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const categoryRequest = validate(CategoryValidation.updateCategoryValidation, request);
    const category = await database.category.findUnique({ where: { slug } });
    if (!category) throw new ErrorResponse(404, 'category not found');

    if (categoryRequest.name) {
      const categoryNameCheck = await database.category.findMany({ where: {name: categoryRequest.name}});
      if (categoryNameCheck.length >= 1) throw new ErrorResponse('401', 'category already exist');
      categoryRequest.slug = slugify(`${categoryRequest.name} ${new Date().getTime().toString()}`, {
        lower: true,
        replacement: '-'
      });
    }
    return database.category.update({ where: { slug }, data: categoryRequest, select: { name: true }})
  }
  static async delete(slug) {
    if(!slug) throw new ErrorResponse(401, 'slug cannot be empty');
    const category = await database.category.findUnique({ where: { slug } });
    if (!category) throw new ErrorResponse(404, 'category not found');
    return database.category.delete({ where: { slug }, select: { name: true }})
  }
}