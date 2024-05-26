import {DestinationService} from "../service/destination-service.js";
import {ActivityService} from "../service/activity-service.js";

export class ActivityController {
  static async get(req, res, next) {
    try {
      const { slug } = req.params
      const result = await ActivityService.get(slug);
      res.status(200).json({ data: result })
    } catch (e) {next(e)}
  }

  static async gets(req, res, next) {
    try {
      const result = await ActivityService.gets(req.query);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async create(req, res, next) {
    try {
      const result = await ActivityService.create(req.body);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async update(req, res, next) {
    try {
      const { slug } = req.params
      const result = await ActivityService.update(slug, req.body);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async delete(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await ActivityService.delete(slug);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
}