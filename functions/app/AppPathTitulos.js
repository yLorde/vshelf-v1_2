const { app } = require('electron');

module.exports = String(app.getPath('documents') + '/VShelf/Titulos/')
// module.exports = String(app.getAppPath() + '/VShelf/')