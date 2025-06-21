// Importações
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Carregar variáveis de ambiente
dotenv.config();

// Criar app Express
const app = express();

// Configurar CORS (permitindo todas as origens)
app.use(cors({
    origin: '*', // Libera requisições de qualquer origem (pode restringir depois)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para receber JSON
app.use(express.json());

// Conexão com o MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB Atlas'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Importação das rotas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');

// Usar as rotas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);

// Rota raiz só pra teste
app.get('/', (req, res) => {
    res.send('🚀 API Marketplace rodando...');
});

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
