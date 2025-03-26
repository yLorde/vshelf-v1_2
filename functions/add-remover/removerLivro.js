const fs = require('fs');
const path = require('path');
const appPathLivros = require('../app/appPathLivros');

module.exports = function removerLivro(livro) {
    try {
        const livros = fs.readdirSync(appPathLivros);
        if (livros.includes(livro)) {
            fs.unlinkSync(path.join(appPathLivros, livro));
        };
    } catch (err) {
        console.error(err);
    };
};