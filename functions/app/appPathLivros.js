const { app } = require('electron');

module.exports = String(app.getPath('documents') + '/VShelf/Livros/')
// module.exports = String(app.getAppPath() + '/VShelf Livros/')