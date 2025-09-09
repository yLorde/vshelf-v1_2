const { app } = require('electron');
const paginaInicial = require('../menus/paginaInicial');
const titulos = require('../menus/titulos');
const dev = require('../menus/dev');
const getConfig = require('../functions/app/getConfig');
const amigos = require('../menus/amigos');
const utilidades = require('../menus/utilidades');
const livros = require('../menus/livros');
const jogos = require('../menus/jogos');

module.exports = { mainMenu }

function mainMenu(mainWindow) {
    try {
        const template = [
            //pagina inicial
            paginaInicial(mainWindow),

            // amigos(mainWindow),

            //listas
            titulos(mainWindow),

            //livros
            livros(mainWindow),

            // jogos(mainWindow),

            //utilidades(mainWindow),
        ];

        if (!app.isPackaged || getConfig().devMode === app.getVersion()) {
            template.push(dev(mainWindow),);
        };

        return template;
    } catch (err) {
        console.error(err);
    };
};
