const { dialog, app, nativeImage } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    showMessage,
    showSaveDialog,
    showOpenDialog,
    showOfflineList,
    showOfflieMovies,
    backupMessage,
};

function showMessage(browserWindow) {
    dialog.showMessageBox(browserWindow, {
        type: 'info',
        title: 'V-Shelf',
        //icon: nativeImage.createFromPath('./vshelf.png'),
        message: 'Hello, World!',
        detail: 'Just a test.',
        buttons: ['Tested', 'Close'],
        defaultId: 0,
    }, (clickedIndex) => {
        console.log(clickedIndex);
    });
};


function showSaveDialog(browserWindow) {
    dialog.showSaveDialog(browserWindow, {
        defaultPath: path.join(app.getPath('downloads'), 'memory-info.txt')
    }).then((filename) => {
        if (filename) {
            const memInfo = JSON.stringify(process.getSystemMemoryInfo(), null, 2);
            fs.writeFile(filename.filePath, memInfo, 'utf-8', (err) => {
                if (err) {
                    dialog.showErrorBox('Save failed.', err.message);
                    console.log(err);
                };
            });
        }
    });
};

function showOpenDialog(browserWindow) {
    dialog.showOpenDialog(browserWindow, {
        defaultPath: app.getPath('downloads'),
        filters: [
            { name: 'Text Files', extensions: ['txt'] }
        ]
    }).then((paths) => {
        if (!paths.canceled) {
            console.log(paths, fs.readFileSync(paths.filePaths[0], 'utf-8'));
        };
    });
};

function showOfflineList(browserWindow) {
    dialog.showOpenDialog(browserWindow, {
        defaultPath: app.getPath('documents'),
        filters: [
            { name: 'Arquivo de lista', extensions: ['json', 'txt', 'vshelf'] }
        ]
    }).then((paths) => {
        if (!paths.canceled) {
            console.log(paths, fs.readFileSync(paths.filePaths[0], 'utf-8'))
        };
    });
};

function showOfflieMovies(browserWindow) {
    dialog.showOpenDialog(browserWindow, {
        defaultPath: app.getPath('videos'),
        filters: [
            { name: 'Arquivos de mídia', extensions: ['mp4', 'mkv'] }
        ],
    }).then((paths) => {
        if (!paths.canceled) {
            console.log(paths);
        };
    })
};