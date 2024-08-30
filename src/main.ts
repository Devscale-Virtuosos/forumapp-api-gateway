import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import { env } from "./utils/env";

const app = express();

/**
 * express middleware for forwarding routes
 */
// forwarding to users service
app.use(
  "/api/users",
  createProxyMiddleware({
    target: env.USERS_SERVICE_URL,
  })
);

// forwarding to replies service
app.use(
  "/api/replies",
  createProxyMiddleware({
    target: env.REPLIES_SERVICE_URL,
  })
);

// forwarding to threads service
app.use(
  "/api/threads",
  createProxyMiddleware({
    target: env.THREADS_SERVICE_URL,
  })
);

app.listen(env.PORT || 8010, () => {
  console.log(`Server running at port: ${env.PORT ?? 8010}`);
});
