module.exports = function jogos(mainWindow) {
    return {
        label: 'Jogos',
        submenu: [
            {
                label: 'Meus jogos',
                click() {
                    mainWindow.loadFile('pages/jogos/meusJogos.html')
                }
            },
            {
                label: 'Adicionar Jogo',
                click() {
                    mainWindow.loadFile('pages/jogos/addJogo.html')
                }
            }
        ]
    }
};