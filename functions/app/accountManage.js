const fs = require('node:fs');
const { app } = require("electron");

module.exports = function accountManage(mainWindow) {
    try {
        mainWindow.webContents.send('accountManage');

    } catch (err) {
        console.error(err);
    }
};