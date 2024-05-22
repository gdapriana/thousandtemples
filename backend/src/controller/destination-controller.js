import {DestinationService} from "../service/destination-service.js";

export class DestinationController {

  static async get(req, res, next) {
    try {
      const { slug } = req.params
      const result = await DestinationService.get(slug);
      res.status(200).json({ data: result })
    } catch (e) {next(e)}
  }

  static async gets(req, res, next) {
    try {
      const result = await DestinationService.gets(req.query);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async create(req, res, next) {
    try {
      const result = await DestinationService.create(req.body);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async update(req, res, next) {
    try {
      const { slug } = req.params
      const result = await DestinationService.update(slug, req.body);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
  static async delete(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await DestinationService.delete(slug);
      res.status(200).json({ data: result });
    } catch (e) {next(e)}
  }
}