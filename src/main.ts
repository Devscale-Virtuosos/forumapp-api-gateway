import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

/**
 * express middleware for forwarding routes
 */
// forwarding to users service
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://users:8000",
  })
);

// forwarding to replies service
app.use(
  createProxyMiddleware({
    target: "http://localhost:8001",
  })
);

app.listen(process.env.PORT || 8010, () => {
  console.log(`Server running at port: ${process.env.PORT ?? 8010}`);
});
