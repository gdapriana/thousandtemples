import Joi from "joi";

export class DistrictValidation {
  static createDistrictValidation = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    cover: Joi.string().uri().optional(),
    description: Joi.string().required()
  });
  static updateDistrictValidation = Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    cover: Joi.string().uri().optional(),
    description: Joi.string().optional()
  });
}