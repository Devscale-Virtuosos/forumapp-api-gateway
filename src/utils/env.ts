import { cleanEnv, port, str, url } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: port(),
  API_GATEWAY_URL: str(),
  USERS_SERVICE_URL: str(),
  THREADS_SERVICE_URL: str(),
  REPLIES_SERVICE_URL: str(),
});
