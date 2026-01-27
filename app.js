const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *  get:
 *      description: Use to request all books
 *      responses:
 *          '200':
 *              description: A successful response.
 */

app.get('/books', (req, res) => {
    res.send([
        {
            id: 1,
            title: "Harry Potter"
        }
    ])
});

/**
 * @swagger
 * /books:
 *    post:
 *      description: Create a new book
 *      parameters:
 *       - name: title
 *         description: Title of the book
 *         in: formData
 *         required: true
 *         type: string
 *      responses:
 *          201:
 *              description: Created a new book.
 */

app.post('/books', (req, res) => {
    res.status(201).send("Book added")
})

app.listen((5000), () => console.log("listening on 5000"))