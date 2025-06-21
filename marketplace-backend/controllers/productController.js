const Product = require('../models/Product');

// Criar novo produto
exports.createProduct = async (req, res) => {
    const { title, description, price } = req.body;

    try {
        const product = await Product.create({
            user: req.user._id,
            title,
            description,
            price
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    }
};

// Listar todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('user', 'name email');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
    }
};
