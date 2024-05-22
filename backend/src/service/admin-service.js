import {validate} from "../validation/validation.js";
import {AdminValidation} from "../validation/admin-validation.js";
import database from "../application/database.js";
import ErrorResponse from "../error/error-response.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export class AdminService {
  static async login(request, response) {
    const adminRequest = validate(AdminValidation.loginUserValidate, request);
    const admin = await database.admin.findUnique({ where: {username: adminRequest.username }});
    if (!admin) throw new ErrorResponse(401, "Wrong username or password");
    if (adminRequest.password !== admin.password) throw new ErrorResponse(401, "Wrong username or password");
    const accessToken = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1d'});
    response.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 24*60*60*1000 });
    return database.admin.update({ where: { username: adminRequest.username }, data: { token: accessToken }, select: { token: true }});
  }
  static async logout(username) {
    const user = await database.admin.findUnique({ where: { username }});
    if (!user) throw new ErrorResponse(404, 'user not found');
    return database.admin.update({ where: { username }, data: { token: null }, select: { username: true }});
  }
}