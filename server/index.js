
require('dotenv/config');
const express = require('express');
const multer = require('multer');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);

app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) { callback(null, 'server/public/uploads'); },
    filename: function (req, file, callback) { callback(null, file.originalname); }
  })
}).single('file');
app.post('/api/upload', upload, (req, res, next) => {
  const file = req.file;
  if (!file) return next(new ClientError('No file provided', 400));
  res.status(201).send({ message: 'File successfully uploaded' });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
