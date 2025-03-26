let filmes;
let filter = "nome";

window.onload = function () {
    fetch('http://localhost:1703/minha-lista').then((res) => res.json()).then((data) => {
        filmes = data;
        data.map((filme) => {
            render(filme, data.indexOf(filme));
            classificar(filme, data.indexOf(filme));
        });
    });
};