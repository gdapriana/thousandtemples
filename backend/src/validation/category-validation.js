import Joi from "joi";

export class CategoryValidation {
  static createCategoryValidation = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    cover: Joi.string().uri().optional(),
    description: Joi.string().required()
  });
  static updateCategoryValidation = Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    cover: Joi.string().uri().optional(),
    description: Joi.string().optional()
  });
}

