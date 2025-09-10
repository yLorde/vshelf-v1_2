const path = require('node:path');
const backup = require('../functions/app/backup');
const backUpMessage = require('../src/dialogs/backUpMessage');
const { app } = require('electron');
const getProfile = require('../functions/profile/getProfile');
const getConfig = require('../functions/app/getConfig');

module.exports = function paginaInicial(mainWindow) {
    return {
        label: 'VShelf',
        submenu: [
            {
                label: 'Página inicial',
                click() {
                    mainWindow.loadFile('index.html')
                },
            },
            // {
            //     label: 'Abrir Configurações',
            //     click() {
            //         mainWindow.loadFile('pages/app/config.html');
            //     }
            // },
            {
                label: 'Exibição',
                submenu: [
                    { role: 'reload' },
                    { type: 'separator' },
                    { role: 'zoomIn' },
                    { role: 'zoomOut' },
                    { role: 'resetZoom' }
                ],
            },
            {
                label: 'Sair do aplicativo',
                accelerator: 'Ctrl+Q',
                click() { app.quit() }
            },
        ]
    }; 1
};