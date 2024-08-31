import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";

import { env } from "./utils";
import { errorHandlerMiddleware, verifyAccessToken } from "./middlewares";

const app = express();
app.use(cookieParser());

/**
 * express middleware for forwarding routes
 */
// forwarding to users service, auth route
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: `${env.USERS_SERVICE_URL}/auth`,
  })
);

// forwarding to users service
app.use(
  "/api/users",
  verifyAccessToken,
  createProxyMiddleware({
    target: `${env.USERS_SERVICE_URL}/users`,
  })
);

// forwarding to replies service
app.use(
  "/api/replies",
  verifyAccessToken,
  createProxyMiddleware({
    target: `${env.REPLIES_SERVICE_URL}/replies`,
  })
);

// forwarding to threads service
app.use(
  "/api/threads",
  verifyAccessToken,
  createProxyMiddleware({
    target: `${env.THREADS_SERVICE_URL}/threads`,
  })
);

// error handler middleware, place it after all routes
app.use(errorHandlerMiddleware);

app.listen(env.PORT || 8010, () => {
  console.log(`Server running at port: ${env.PORT ?? 8010}`);
});
