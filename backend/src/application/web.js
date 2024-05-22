import express from "express";
import cors from "cors";
import {api} from "../route/api.js";
import {publicApi} from "../route/public-api.js";
import cookieParser from "cookie-parser";
import {errorMiddleware} from "../middleware/error-middlware.js";

export const web = express();

web.use(express.json());
web.use(cors());
web.use(cookieParser());
web.use(publicApi);
web.use(api);
web.use(errorMiddleware);