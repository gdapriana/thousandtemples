import {DistrictService} from "../service/district-service.js";
import {CategoryService} from "../service/category-service.js";

export class DistrictController {
  static async get(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await DistrictService.get(slug);
      res.status(200).json({ data: result });
    }
    catch (e) {next(e)}
  }
  static async gets(req, res, next) {
    try {
      const result = await DistrictService.gets(req.query);
      res.status(200).json({ data: result });
    }
    catch (e) {next(e)}
  }

  static async create(req, res, next) {
    try {
      const result = await DistrictService.create(req.body);
      res.status(200).json({ data: result });
    }
    catch (e) {next(e)}
  }

  static async update(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await DistrictService.update(slug, req.body);
      res.status(200).json({ data: result })
    } catch (e) {
      next(e)
    }
  }

  static async delete(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await DistrictService.delete(slug);
      res.status(200).json({ data: result })
    }
    catch (e) {next(e)}
  }
}