const fs = require('fs');
const appPathLivros = require('../app/appPathLivros');

module.exports = function meusLivros() {
    try {
        const livros = fs.readdirSync(appPathLivros).filter(livro => livro.endsWith('.pdf'));
        return livros;
    } catch (err) {
        console.error(err);
    };
};
