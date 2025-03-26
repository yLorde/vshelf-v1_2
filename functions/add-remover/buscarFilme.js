const fs = require('fs');
const AppPathTitulos = require('../app/AppPathTitulos');

module.exports = function buscarFilme(nome, genero) {
    try {
        const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
        const filme = JSON.parse(filmes).find(filme => filme.nome === nome && filme.genero === genero);
        return filme;
    } catch (err) {
        console.error(err);
    };
};