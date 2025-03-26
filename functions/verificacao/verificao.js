const fs = require("node:fs");
const path = require("node:path");
const { app } = require("electron");

module.exports = function verificao() {
    if (fs.existsSync(String(app.getPath('documents') + '/VShelf/'))) {
        const appFolder = String(app.getPath('documents') + '/VShelf/');
        const subFolders = fs.readdirSync(appFolder);

        const defaultFolder = fs.readdirSync(app.getAppPath() + '/src/models/');

        try {
            defaultFolder.map(defaultFolder => {
                if (!subFolders.includes(defaultFolder)) {
                    fs.mkdirSync(appFolder + '/' + defaultFolder);
                };

                const fileOnFolder = fs.readdirSync(appFolder + '/' + defaultFolder);
                const fileOnDefault = fs.readdirSync(app.getAppPath() + '/src/models/' + defaultFolder);

                fileOnDefault.map(fileOnDefault => {
                    if (!fileOnFolder.includes(fileOnDefault)) {
                        fs.copyFileSync(app.getAppPath() + '/src/models/' + defaultFolder + '/' + fileOnDefault, appFolder + '/' + defaultFolder + '/' + fileOnDefault);
                    };
                });
            });
        } catch (err) {
            console.error(err);
        };
    } else {
        fs.mkdirSync(String(app.getPath('documents') + '/VShelf/'));
        verificao();
    };
};