const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     description: Update a book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: Book ID
 *       - name: title
 *         in: formData
 *         required: true
 *         type: string
 *         description: New book title
 *     responses:
 *       200:
 *         description: Book updated successfully
 */

app.put('/books/:id', (req, res) => {
    res.send('Book updated');
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully
 */

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    res.send(`Book with id ${id} deleted`);
})

app.listen((5000), () => console.log("listening on 5000"))