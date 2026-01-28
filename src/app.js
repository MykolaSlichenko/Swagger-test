const express = require('express');
const booksRoutes = require('./routes/books.routes');
const swaggerDocs = require('./docs/swagger');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', booksRoutes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
