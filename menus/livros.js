const adicionarLivroDialog = require("../src/dialogs/adicionarLivroDialog");

module.exports = function livros(mainWindow) {
    return {
        label: 'Livros',
        submenu: [
            {
                label: 'Meus Livros',
                click() {
                    mainWindow.loadFile('pages/livros/meusLivros.html')
                }
            },
            {
                label: 'Adicionar Livro',
                click() {
                    adicionarLivroDialog(mainWindow)
                }
            },
        ]
    }
};