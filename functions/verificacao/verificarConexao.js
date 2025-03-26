module.exports = async function verificarConexao() {
    try {

        const result = await fetch('https://www.google.com', { mode: 'no-cors' })
            .then((res) => { return true; })
            .catch((err) => { return false; });

        return result;
    } catch (error) {
        console.error('Erro ao verificar conexão:', error);
        return false
    }
};
