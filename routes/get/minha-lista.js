const minhaLista = require("../../functions/add-remover/minhaLista");

module.exports = {
    route: '/minha-lista',
    method: 'get',
    async execute(request, response) {
        try {
            const filmes = minhaLista();
            return response.json(filmes);
        } catch (err) {
            console.error(err);
        };
    }
};