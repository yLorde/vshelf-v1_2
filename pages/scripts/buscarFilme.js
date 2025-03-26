function buscarFilme(filme) {
    const titulo = document.querySelector('#filme')?.value;
    if (filme && filme === '#') resultado = filmes;
    // resultado = filmes.filter(filme => filme.nome.toLowerCase().includes(String(titulo).toLowerCase()));
    resultado = filmes.filter(filme => filme[filter].toLowerCase().includes(String(titulo).toLowerCase()))

    if (resultado.length > 0) {
        const lista = document.getElementById('lista');
        lista.innerHTML = ``;
        resultado.map((filme) => {
            render(filme, filmes.indexOf(filme));
            classificar(filme, filmes.indexOf(filme));
        })
    } else {
        lista.innerHTML = `
        <div class="flex cursor-pointer text-center items-center justify-center">
            <div class="flex flex-col gap-2 text-black max-w-md w-full bg-white p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
                <div class="flex-row justify-between w-full">
                    <h3 class="text-xl font-bold">Nenhum título foi encontrado</h3>
                </div>
            </div>
        </div>
        `
    }
}