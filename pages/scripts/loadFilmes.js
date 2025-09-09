let filmes;
let filter = "nome";

window.onload = function () {
    fetch('http://localhost:1703/minha-lista').then((res) => res.json()).then((data) => {
        filmes = data.sort((a, b) => a.nome.localeCompare(b.nome)); 
        const filmesJSON = JSON.stringify(filmes);
        localStorage.setItem("filmes", filmesJSON);
        data.map((filme) => {
            render(filme, data.indexOf(filme));
            classificar(filme, data.indexOf(filme));
        });
    });
};