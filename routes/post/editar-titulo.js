const editarFilme = require("../../functions/add-remover/editarFilme");

module.exports = {
    route: '/editar-titulo',
    method: 'post',
    async execute(request, response) {
        try {
            const { headers } = request;
            const { nome, classificacao, genero, status, tipo, stream, nota } = headers;
            if (!nome || !classificacao || !genero || !status || !nota)
                return response.status(400).json({ message: 'Dados insuficientes!' });

            editarFilme(nome, classificacao, stream, genero, status, tipo, nota);
            return response.json({ message: 'Título editado com sucesso!' });
        } catch (err) {
            console.error(err);
        };
    },
};