const { app } = require("electron");
const path = require('node:path');
const enviarLista = require("../functions/amigos/enviarLista");
const receberLista = require("../functions/amigos/receberLista");
const accountManage = require("../functions/app/accountManage");

module.exports = function amigos(mainWindow) {
    return {
        label: 'Amigos',
        submenu: [
            {
                label: 'Conta',
                submenu: [
                    {
                        label: 'Minha conta',
                        click() {
                            accountManage(mainWindow)
                        },
                    }
                ]
            },
            /*
            {
                label: 'Enviar lista',
                click() {
                    enviarLista();
                },
            },
            {
                label: 'Receber lista',
                click() {
                    receberLista();
                },
            }
            */
        ]
    };
};