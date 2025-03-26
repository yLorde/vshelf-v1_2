const fs = require('node:fs');
const AppPathTitulos = require('./AppPathTitulos');
const appPathApp = require('./appPathApp');

module.exports = function backup() {
    const filmes = fs.readFileSync(AppPathTitulos + 'list.json', 'utf-8');
    const config = fs.readFileSync(appPathApp + 'config.json', 'utf-8');
    const backup = { filmes, config };
    try {
        fs.writeFileSync(AppPathTitulos + 'backup.json', JSON.stringify(backup), 'utf-8', (err) => {
            if (err) {
                console.error(err); 
            };
        });
    } catch (err) {
        console.error(err);
    };
};