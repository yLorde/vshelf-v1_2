const fs = require('fs');
const path = require('path');
const appPathLivros = require('../app/appPathLivros');

module.exports = function adicionarLivro(livro) {
    try {
        const livros = fs.readdirSync(appPathLivros);
        if (!livros.includes(path.basename(livro))) {
            fs.copyFileSync(livro, path.join(appPathLivros, path.basename(String(livro).replace('#', ''))));
        };
    } catch (err) {
        console.error(err);
    };
};