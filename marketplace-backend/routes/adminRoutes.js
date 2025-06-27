const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// ✅ Listar todos os usuários (admin)
router.get('/users', protect, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

// ✅ Listar todos os produtos (admin)
router.get('/products', protect, isAdmin, async (req, res) => {
  try {
    const products = await Product.find().populate('owner', 'name email');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

module.exports = router;
