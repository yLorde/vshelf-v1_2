const { dialog } = require("electron");
const { app } = require("electron");
const adicionarLivro = require("../../functions/add-remover/adicionarLivro");

module.exports = function adicionarLivroDialog(mainWindow) {
    try {
        dialog.showOpenDialog(mainWindow, {
            defaultPath: app.getPath('documents'),
            title: 'Selecine um arquivo PDF',
            filters: [
                { name: 'Arquivos PDF', extensions: ['pdf'] }
            ]
        }).then((paths) => {
            if (!paths.canceled) {
                adicionarLivro(paths.filePaths[0]);
            };
        });
    } catch (err) {
        console.error(err);
    };
};