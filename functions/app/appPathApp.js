const { app } = require('electron');

module.exports = String(app.getPath('documents') + '/VShelf/App/')
// module.exports = String(app.getAppPath() + '/VShelf/')