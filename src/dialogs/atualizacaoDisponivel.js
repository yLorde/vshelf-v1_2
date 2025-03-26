const { dialog, app } = require("electron");
const { autoUpdater } = require("electron-updater");

module.exports = function atualizacaoDisponivel(mainWindow) {
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        buttons: ['Fechar aviso'],
        title: 'Atualização Disponível',
        message: 'Estamos atualizando...',
        detail: 'Há uma nova versão está disponível, estamos trabalhando na atualização. Favor não feche o aplicativo enquanto o processo não terminar, ao fim ele reiniciará automaticamente.',
        defaultId: 0,
    }).then(value => {
        if (value.response === 0) {
            autoUpdater.downloadUpdate().then(() => {
                autoUpdater.quitAndInstall(true, true);
            });
        };
    })
};