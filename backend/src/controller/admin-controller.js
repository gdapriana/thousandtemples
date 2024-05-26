import {AdminService} from "../service/admin-service.js";

export class AdminController {
  static async login(req, res, next) {
    try {
      const result = await AdminService.login(req.body, res);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e)
    }
  }
  static async logout(req, res, next) {
    try {
      const result = await AdminService.logout(req.username);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e)
    }
  }
}