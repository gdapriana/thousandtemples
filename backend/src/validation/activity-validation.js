import Joi from "joi";

export class ActivityValidation {
  static getActivityValidation = Joi.string().required();
  static deleteActivityValidation = Joi.string().required();
  static createActivityValidation = Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().min(10).required(),
    body: Joi.string().min(10).required(),
    cover: Joi.string().uri().optional(),
    address: Joi.string().optional(),
    districtSlug: Joi.string().required()
  })
  static updateActivityValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    description: Joi.string().min(10).optional(),
    body: Joi.string().min(10).optional(),
    cover: Joi.string().uri().optional(),
    address: Joi.string().optional(),
    districtSlug: Joi.string().optional()
  })
}