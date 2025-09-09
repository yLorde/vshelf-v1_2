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
        const tema = localStorage.getItem('tema');
        let customClass = '';
        let customClass2 = '';

        if (tema === 'escuro') {
            customClass = 'text-white ' + customClass
            customClass2 = 'bg-[#121212] ' + customClass2;
        } else {
            customClass = 'text-black ' + customClass;
            customClass2 = 'bg-white ' + customClass2;
        };

        lista.innerHTML = `
        <div class="flex ${customClass} cursor-pointer text-center items-center justify-center">
            <div class="flex flex-col ${customClass2} gap-2 max-w-md w-full p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
                <div class="flex-row justify-between w-full">
                    <h3 class="text-xl font-bold">Nenhum título foi encontrado</h3>
                </div>
            </div>
        </div>
        `
    }
}