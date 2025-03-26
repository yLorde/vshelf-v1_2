const removerFilme = require("../../functions/add-remover/removerFilme");

module.exports = {
    route: '/remover-titulo',
    method: 'post',
    async execute(request, response) {
        try {
            const { headers } = request;
            const { nome, genero } = headers;
            removerFilme(nome, genero);
        } catch (err) {
            console.error(err);
        };
    }
};