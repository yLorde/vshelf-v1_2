const meusLivros = require("../../functions/add-remover/meusLivros");

module.exports = {
    route: '/meus-livros',
    method: 'get',
    async execute(request, response) {
        try {
            const livros = meusLivros();
            return response.json(livros);
        } catch (err) {
            console.error(err);
        };
    }
};