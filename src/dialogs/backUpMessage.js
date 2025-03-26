const { dialog } = require("electron");

module.exports = function backUpMessage(mainWindow, app) {
    try {
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'V-Shelf | BackUp',
            message: 'BackUp realizado com sucesso!',
            buttons: ['Close'],
            defaultId: 0,
        });
    } catch (err) {
        console.error(err);
    };
};