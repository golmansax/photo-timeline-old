import express from 'express';
import path from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { isDevelopment } from './config';
import AdminPage from '../frontend/admin_page/server_entry';
import HomePage from '../frontend/home_page/server_entry';

const server = express();

if (isDevelopment()) {
  const httpProxy = require('http-proxy');
  const proxy = httpProxy.createProxyServer();

  server.all('/assets/*', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:8080' });
  });
} else {
  server.use(
    '/assets',
    express.static(path.resolve(__dirname, '..', 'webpack', 'build'))
  );
}

server.get('/', (req, res) => {
  const page = renderToStaticMarkup(<HomePage />);
  res.send(`<!DOCTYPE html>${page}`);
});

server.get('/admin*', (req, res) => {
  const page = renderToStaticMarkup(<AdminPage />);
  res.send(`<!DOCTYPE html>${page}`);
});

server.use((err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line no-console
  next(err);
});

server.use((err, req, res, next) => {
  if (res.headersSent) { return next(err); }

  if (isDevelopment()) { Reflect.deleteProperty(err, 'stack'); }
  res.status(err.statusCode || 500).json({ error: err.message });
});

export default server;
