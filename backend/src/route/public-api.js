import express from "express";
import {AdminController} from "../controller/admin-controller.js";
import {CategoryController} from "../controller/category-controller.js";
import {DistrictController} from "../controller/district-controller.js";
import {DestinationController} from "../controller/destination-controller.js";
import {ActivityController} from "../controller/activity-controller.js";

export const publicApi = express.Router();
publicApi.post('/api/admin/login', AdminController.login);


publicApi.get('/api/categories/:slug', CategoryController.get);
publicApi.get('/api/categories', CategoryController.gets);

publicApi.get('/api/districts/:slug', DistrictController.get);
publicApi.get('/api/districts', DistrictController.gets);

publicApi.get('/api/destinations/:slug', DestinationController.get);
publicApi.get('/api/destinations', DestinationController.gets);

publicApi.get('/api/activities/:slug', ActivityController.get);
publicApi.get('/api/activities', ActivityController.gets);
