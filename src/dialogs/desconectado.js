const { dialog, app } = require("electron");

module.exports = function desconectado(mainWindow) {
    dialog.showMessageBox(mainWindow, {
        title: 'Você está descontactado da WEB',
        message: 'Rede indisponível',
        detail: 'Isso pode afetar diretamente funções como verificação de atualizações, sugestões do aplicativo, sistema de amigos entre outros...',
        buttons: ['Fechar Aplicação', 'Ficar no modo Offline'],
        checkboxLabel: 'Não perguntar novamente',
        checkboxChecked: false
    }).then(value => {
        if (value.checkboxChecked) {
            
        };

        if (value.response === 0) {
            try {
                app.quit();
            } catch (err) {
                console.error(err);
            };
        };
    })
};