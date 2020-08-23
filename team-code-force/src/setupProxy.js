require('dotenv').config();

const { SERVER_PORT } = process.env || 8080;

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/auth', {
      target: `http://localhost:${SERVER_PORT}`,
    })
  );

  app.use(
    createProxyMiddleware('/notify', {
      target: `http://localhost:${SERVER_PORT}`,
    })
  );

<<<<<<< HEAD
  app.use(
    createProxyMiddleware('/park', {
      target: `http://localhost:${SERVER_PORT}`,
    })
  );

  app.use(
    createProxyMiddleware('/route', {
      target: `http://localhost:${SERVER_PORT}`,
    })
  );
=======
  app.use(createProxyMiddleware('/route', {
    target: `http://localhost:${SERVER_PORT}`,
  }));

  app.use(createProxyMiddleware('/park', {
    target: `http://localhost:${SERVER_PORT}`,
  }));
>>>>>>> e0d4b6050bcb8a6dcdfca0798672d713e4ec1871
};
