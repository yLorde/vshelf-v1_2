const { app } = require('electron');

module.exports = function utilidades(mainWindow) {
    return {
        label: 'Utilidades',
        submenu: [
            {
                label: 'A fazeres',
                submenu: [
                    {
                        label: 'Calendário',
                        click() {
                            
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Ver lista de tarefas',
                        click() {
                            mainWindow.loadURL(`file://${__dirname}/../pages/utilidades/a_fazer/verLista.html`);
                        }
                    },
                    {
                        label: 'Adicionar tarefa',
                        click() {
                            mainWindow.loadURL(`file://${__dirname}/../pages/utilidades/a_fazer/addAFazer.html`);
                        }
                    }
                ],
            },
        ],
    };
};