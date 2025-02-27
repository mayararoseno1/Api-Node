const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/', (req, res) =>{
    res.json(Product.listAllProducts());
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    const product = Product.getProductById(id);
    res.json(product);
});

router.post('/', (req, res) => {
    const product = req.body;
    Product.createProduct(product);
    res.status(201).json(product);
});

router.put('/:id', (req, res)=> {
    const id = req.params.id;
    const updateDatas = req.body;
    Product.updateProduct(id, updateDatas);
    res.json({ message: 'Updated product successfully'});
});

router.delete('/:id', (req, res)=> {
    const id = req.params.id;
    Product.deleteProduct(id);
    res.json({ message: 'Deleted product successfully'});
});

module.exports = router;