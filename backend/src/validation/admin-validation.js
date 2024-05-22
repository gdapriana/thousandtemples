import Joi from "joi";
export class AdminValidation {
  static loginUserValidate = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required()
  });
}