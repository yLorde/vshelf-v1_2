const fs = require('fs');
const AppPathTitulos = require('../app/AppPathTitulos');

module.exports = function minhaLista() {
    try {
        const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
        return JSON.parse(filmes);
    } catch (err) {
        console.error(err);
    };
};