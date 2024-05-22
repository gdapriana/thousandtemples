import {CategoryService} from "../service/category-service.js";

export class CategoryController {
  static async get(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await CategoryService.get(slug);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e)
    }
  }

  static async gets(req, res, next) {
    try {
      const result = await CategoryService.gets(req.query);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e)
    }
  }

  static async create(req, res, next) {
    try {
      const result = await CategoryService.create(req.body);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e)
    }
  }

  static async update(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await CategoryService.update(slug, req.body);
      res.status(200).json({ data: result })
    } catch (e) {
      next(e)
    }
  }

  static async delete(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await CategoryService.delete(slug);
      res.status(200).json({ data: result })
    } catch (e) {
      next(e)
    }
  }
}