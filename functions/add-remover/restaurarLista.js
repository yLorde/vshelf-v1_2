const { app, dialog } = require('electron');
const fs = require('fs');
const adicionarFilme = require('./adicionarFilme');

module.exports = function restaurarLista() {
    try {
        dialog.showOpenDialog({
            title: 'Restaurar Lista',
            filters: [{ name: 'JSON', extensions: ['json'] }],
            buttonLabel: 'Restaurar',
            defaultPath: app.getPath('documents'),
        }).then((result) => {
            if (!result.canceled) {
                const fileContent = fs.readFileSync(result.filePaths[0], 'utf8');

                const filmes = JSON.parse(fileContent);
                filmes.forEach(filme => {
                    adicionarFilme(filme);
                });
            };
        });
    } catch (error) {
        console.error(error);
    };
};