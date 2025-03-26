const { dialog, app } = require("electron");
const package = require('../../package.json');

module.exports = function informacoes(mainWindow) {
    try {
        dialog.showMessageBox(mainWindow, {
            title: 'Informações do aplicativo',
            buttons: ['Close'],
            defaultId: 0,
            type: 'info',
            detail: `Versão: ${app.getVersion()} \nDesenvolvedor: ${package.author}`,
            message: `Você está rodando uma versão privada de testes.`,
        })
    } catch (err) {
        console.error(err);
    };
};