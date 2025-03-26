const fs = require('node:fs');
const AppPathTitulos = require("../app/AppPathTitulos");

module.exports = function removerFilme(nome, genero) {
    try {
        const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
        let filmeJson = filmes ? JSON.parse(filmes) : [];
        const filme = filmeJson.find(filme => filme.nome === nome && filme.genero === genero);
        filmeJson.splice(filmeJson.indexOf(filme), 1);  
        fs.writeFileSync(AppPathTitulos + 'list.json', JSON.stringify(filmeJson), 'utf-8', (err) => {
            if (err) console.log(err);
        });
    } catch (err) {
        console.error(err);
    };
};