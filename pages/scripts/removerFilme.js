function removerFilme(nome, genero) {
    fetch('http://localhost:1703/remover-titulo', {
        method: 'POST',
        headers: {
            nome: nome,
            genero: genero
        }
    });

    location.reload();
};