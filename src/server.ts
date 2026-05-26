import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Bem-vindo ao Backend do Backoffice da Arcturo!" });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${3000}`);
});

