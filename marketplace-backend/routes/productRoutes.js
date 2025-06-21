const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

// Criar produto (precisa estar logado)
router.post('/', protect, createProduct);

// Listar produtos (público)
router.get('/', getAllProducts);

module.exports = router;
