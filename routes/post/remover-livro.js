const removerLivro = require("../../functions/add-remover/removerLivro");

module.exports = {
    route: '/remover-livro',
    method: 'post',
    async execute(request, response) {
        try {
            removerLivro(request.query.livro);
        } catch (err) {
            console.error(err);
        }
    },
}