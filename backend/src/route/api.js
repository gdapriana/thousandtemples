import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import {AdminController} from "../controller/admin-controller.js";
import {CategoryController} from "../controller/category-controller.js";
import {DistrictController} from "../controller/district-controller.js";
import {DestinationController} from "../controller/destination-controller.js";
import {ActivityController} from "../controller/activity-controller.js";

export const api = express.Router();
api.use(authMiddleware);
api.delete('/api/admin/logout', AdminController.logout);

api.post('/api/admin/categories', CategoryController.create);
api.patch('/api/admin/categories/:slug', CategoryController.update);
api.delete('/api/admin/categories/:slug', CategoryController.delete);

api.post('/api/admin/districts', DistrictController.create);
api.patch('/api/admin/districts/:slug', DistrictController.update);
api.delete('/api/admin/districts/:slug', DistrictController.delete);

api.post('/api/admin/destinations', DestinationController.create);
api.patch('/api/admin/destinations/:slug', DestinationController.update);
api.delete('/api/admin/destinations/:slug', DestinationController.delete);

api.post('/api/admin/activities', ActivityController.create);
api.patch('/api/admin/activities/:slug', ActivityController.update);
api.delete('/api/admin/activities/:slug', ActivityController.delete);
