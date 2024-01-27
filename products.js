var express = require("express");
var router = express.Router();

/* GET /api/products */
router.get("/", function (req, res) {

  const { products } = req.app.locals;

  res.json(products);
});

/* GET /api/products/:id */
router.get("/:id", function (req, res) {

  const { products } = req.app.locals;

  const product = products.find((x) => x.id == req.params.id);

  if (!product) {
    res.status(404).send();
    return;
  }

  res.json(product);
});

/* POST /api/products */
router.post("/", function (req, res) {

  let { products } = req.app.locals;
  
  const { name, description, imageUrl, sku, price } = req.body;

  let newProduct = {
    id: req.app.locals.nextId++,
    name,
    description,
    imageUrl,
    sku,
    price,
  };

  products.push(newProduct);

  res.status(201).send(newProduct);
});

/* DELETE /api/products */
router.delete("/:id", function (req, res) {
  
  req.app.locals.products = req.app.locals.products.filter(x => x.id != req.params.id);   
  
  res.status(204).end();
});

module.exports = router;