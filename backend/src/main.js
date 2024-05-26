import {web} from "./application/web.js";
import dotenv from "dotenv"
dotenv.config();

web.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})