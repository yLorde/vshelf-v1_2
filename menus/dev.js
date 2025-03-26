const { dialog } = require("electron");
const informacoes = require("../src/dialogs/informacoes");
const { app } = require("electron");

module.exports = function dev(mainWindow) {
    return {
        label: 'Desenvolvedor',
        submenu: [
            { role: 'toggleDevTools' },
            {
                label: 'Relaunch',
                click() {
                    app.relaunch();
                    app.quit();
                }
            },
            {
                label: 'Informações',
                click() {
                    informacoes(mainWindow, app)
                },
            },
            {
                label: 'Abrir Link',
                click() {
                    mainWindow.loadURL('file://' + __dirname + '/../pages/dev/abrirLink.html');
                }
            },
            {
                label: 'Pasta do App',
                click() {
                    dialog.showOpenDialog(mainWindow, {
                        defaultPath: app.getAppPath(),
                        title: 'Selecione uma pasta',
                        buttonLabel: 'Selecionar',
                        properties: ['openDirectory']
                    }).then((result) => {
                        
                    });
                }
            }
        ]
    };
};