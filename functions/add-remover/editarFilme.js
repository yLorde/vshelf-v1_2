const fs = require('node:fs');
const AppPathTitulos = require('../app/AppPathTitulos');

module.exports = function editarFilme(nome, classificacao, stream, genero, status, tipo, nota) {
    try {
        const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
        let filmeJson = filmes ? JSON.parse(filmes) : [];
        const filme = filmeJson.find(filme => filme.nome === nome && filme.genero === genero);
        filme.classificacao = classificacao;
        filme.status = status;
        filme.stream = stream; 
        filme.tipo = tipo;
        filme.nota = nota;
        fs.writeFileSync(AppPathTitulos + 'list.json', JSON.stringify(filmeJson), 'utf-8', (err) => {
            if (err) console.log(err);
        });
    } catch (err) {
        console.error(err);
    };
};