const fs = require('node:fs');
const AppPathTitulos = require('../app/AppPathTitulos');

module.exports = function adicionarFilme(filme) {
    const { nome, tipo, genero, stream, classificacao, status, nota } = filme;
    const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
    try {
        let filmeJson = filmes ? JSON.parse(filmes) : [];

        if (filmeJson.find(filme => filme.nome === nome)) return;
        
        filmeJson.push({ nome, tipo, genero, stream, classificacao, status, nota });
        fs.writeFileSync(AppPathTitulos + 'list.json', JSON.stringify(filmeJson), 'utf-8', (err) => {
            if (err) console.log(err);
        });
    } catch (err) {
        console.error(err);
    };
};