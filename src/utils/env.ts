import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: port(),
  USERS_SERVICE_URL: str(),
  THREADS_SERVICE_URL: str(),
  REPLIES_SERVICE_URL: str(),
});
