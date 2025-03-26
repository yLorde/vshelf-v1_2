const adicionarFilme = require("../../functions/add-remover/adicionarFilme");

module.exports = {
    route: '/adicionar-titulo',
    method: 'post',
    async execute(request, response) {
        try {
            const { headers } = request;
            const { nome, tipo, genero, stream, classificacao, status, nota } = headers;

            if (!nome || !tipo || !genero || !stream || !classificacao || !status || !nota)
                return response.status(400).json({ message: 'Dados insuficientes!' });

            const filme = { nome, tipo, genero, stream, classificacao, status, nota };
            adicionarFilme(filme);
        } catch (err) {
            console.error(err);
        };
    }
};