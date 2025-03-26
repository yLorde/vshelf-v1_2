const restaurarLista = require("../functions/add-remover/restaurarLista");

module.exports = function titulos(mainWindow) {
    return {
        label: 'Títulos',
        submenu: [
            {
                label: 'Meus Títulos',
                click() {
                    mainWindow.loadFile('pages/titulos/minhaLista.html')
                }
            },
            {
                label: 'Adicionar Título',
                click() {
                    mainWindow.loadFile('pages/titulos/addTitulo.html')
                },
            },
            {
                label: 'Utilidades',
                submenu: [
                    {
                        label: 'Restaurar Lista',
                        click() {
                            restaurarLista();
                        }
                    },
                    {
                        label: 'Gerenciar Títulos',
                        click() {
                            mainWindow.loadFile('pages/titulos/gerenciar.html')
                        }
                    }
                ]
            }
        ],
    };

};