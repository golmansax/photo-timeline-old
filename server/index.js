import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import formidable from 'formidable';
import { renderToStaticMarkup } from 'react-dom/server';
import { uploadImage } from './cloudinary';
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

server.use('/static', express.static(path.resolve(__dirname, '..', 'public')));
server.use(bodyParser.urlencoded({ extended: false, limit: '4MB' }));

server.get('/', (req, res) => {
  const page = renderToStaticMarkup(<HomePage />);
  res.send(`<!DOCTYPE html>${page}`);
});

server.get('/admin*', (req, res) => {
  const page = renderToStaticMarkup(<AdminPage />);
  res.send(`<!DOCTYPE html>${page}`);
});

server.post('/create-image', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    uploadImage(files.image.path, fields.imageId).then((data) => {
      res.send({ data });
    });
  });
});

server.use((err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line no-console
  next(err);
});

server.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (isDevelopment()) { Reflect.deleteProperty(err, 'stack'); }
  res.status(err.statusCode || 500).json({ error: err.message });
});

export default server;
