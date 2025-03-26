const buscarFilme = require("../../functions/add-remover/buscarFilme");

module.exports = {
    route: '/buscar-filme',
    method: 'get',
    async execute(request, response) {
        try {
            const { headers } = request;
            const { nome, genero } = headers;
            const filme = buscarFilme(nome, genero);
            return response.json(filme);
        } catch (err) {
            console.error(err);
        };
    }
};