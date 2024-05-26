import Joi from "joi";

export class DestinationValidation {
  static getDestinationValidation = Joi.string().required()
  static createDestinationValidation = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    description: Joi.string().min(10).required(),
    cover: Joi.string().uri().optional(),
    address: Joi.string().min(3).required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    price: Joi.number().required(),
    districtSlug: Joi.string().required(),
    categorySlug: Joi.string().required()
  })

  static updateDestinationValidation = Joi.object({
    name: Joi.string().min(5).max(100).optional(),
    description: Joi.string().min(10).optional(),
    cover: Joi.string().uri().optional(),
    address: Joi.string().min(3).optional(),
    latitude: Joi.string().optional(),
    longitude: Joi.string().optional(),
    price: Joi.number().optional(),
    districtSlug: Joi.string().optional(),
    categorySlug: Joi.string().optional()
  })
}