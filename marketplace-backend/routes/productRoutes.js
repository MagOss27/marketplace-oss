const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');

// ✅ Listar produtos do usuário logado
router.get('/me', protect, async (req, res) => {
  try {
    const produtos = await Product.find({ owner: req.user.id });
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar produtos do usuário' });
  }
});

module.exports = router;
