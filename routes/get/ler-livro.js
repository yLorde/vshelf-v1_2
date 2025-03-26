const path = require('node:path');
const appPathLivros = require('../../functions/app/appPathLivros');

module.exports = {
    route: '/ler-livro',
    method: 'get',
    async execute(request, response) {
        try {
            return response.sendFile(path.join(appPathLivros, request.query.livro));
        } catch (err) {
            console.error(err);
        };
    }
};