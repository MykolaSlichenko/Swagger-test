exports.getBooks = (req, res) => {
  res.json([
    { id: 1, title: 'Harry Potter' }
  ]);
};

exports.createBook = (req, res) => {
  const { title } = req.body;
  res.status(201).json({ message: 'Book added', title });
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Book ${id} updated` });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Book ${id} deleted` });
};
