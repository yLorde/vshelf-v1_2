const { app, BrowserWindow, Menu, session } = require('electron');
const { autoUpdater } = require('electron-updater');

const path = require('node:path');
let mainWindow;
const { mainMenu } = require('./src/mainMenu.js');
const localServer = require('./localServer.js');
const getConfig = require('./functions/app/getConfig');
const verificarConexao = require('./functions/verificacao/verificarConexao.js');
const verificao = require('./functions/verificacao/verificao.js');
const desconectado = require('./src/dialogs/desconectado.js');
const atualizacaoDisponivel = require('./src/dialogs/atualizacaoDisponivel.js');
const getOS = require('./getOS.js');

function createBrowserWindow() {
    try {
        mainWindow = new BrowserWindow({
            width: 1366,
            height: 720,
            resizable: true,
            title: require('./package.json').productName,
            icon: "icon.icon",
        });

        //configurações do navegador
        mainWindow.loadFile('index.html');

        const menu = Menu.buildFromTemplate(mainMenu(mainWindow));
        Menu.setApplicationMenu(menu);

        autoUpdater.setFeedURL({
            provider: 'github',
            owner: 'VShelf',
            repo: 'app',
            releaseType: "release",
            url: `https://github.com/VShelf/${getOS()}/releases`,
            private: false,
            timeout: 10000,
        });

        autoUpdater.checkForUpdates();

    } catch (err) {
        console.error(err);
    };
};

try {
    verificao();
    localServer();
    verificarConexao().then(res => {
        if (res) {
            autoUpdater.on('update-available', () => {
                atualizacaoDisponivel(mainWindow);
            });
        } else {
            if (getConfig().offlineWarn) desconectado();
        };
    });
} catch (err) {
    console.error(err);
};

app.whenReady().then(() => {
    createBrowserWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createBrowserWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
});