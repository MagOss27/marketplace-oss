const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware para proteger rotas (usuário autenticado)
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Token inválido' });
        }
    } else {
        res.status(401).json({ message: 'Token não fornecido' });
    }
};

// Middleware para verificar se o usuário é admin
function isAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acesso negado: apenas admins' });
    }
    next();
}

// Middleware genérico (não necessário se você usar protect)
function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { protect, isAdmin, authenticateToken };
