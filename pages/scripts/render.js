function render(titulo, id, stream) {
    const lista = document.getElementById('lista');
    lista.innerHTML += `
    <div class="flex cursor-pointer items-center justify-center">
        <div
        class="flex flex-col gap-2 default-text max-w-xl w-full default-bg p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
        >

        <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row justify-between w-full">
            <p class="text-sm font-bold"><b>${String(titulo.status).toUpperCase()}</b></p>
            <p class="text-sm font-bold"><b>${String(titulo.stream).toUpperCase()}</b></p>
            </div>
        </div>
        <div class="flex flex-row justify-between w-full">
            <h3 class="text-xl font-bold">${String(titulo.nome).slice(0, 1).toUpperCase() + String(titulo.nome).slice(1)}</h3>

            <div class="text-xs">
                <div id="titulo_${id}" class="flex flex-row">
                </div>
            </div>
        </div>
            <div class="text-sm">
                <b>GÊNERO:</b> ${String(titulo.genero).slice(0, 1).toUpperCase() + String(titulo.genero).slice(1)} <br />
                <b>TIPO:</b> ${String(titulo.tipo).slice(0, 1).toUpperCase() + String(titulo.tipo).slice(1)} <br />
            </div>
            <div class="text-sm border rounded-md border-black p-2">
                <b>Nota:</b> 
                    <b class="font-bold text-red-500 text-sm">
                        ${titulo.nota ? String(titulo.nota).slice(0, 1).toUpperCase() + String(titulo.nota).slice(1) : 'Não há uma anotação sobre este título'}
                    </b> 
                <br />
            </div>
            <div class="flex flex-row justify-between">
                <button onclick="location.href='editarFilme.html?nome=${titulo.nome}&genero=${titulo.genero}'"  class="border rounded-md border-black p-1 px-3 hover:bg-black hover:text-white hover-duration-200 duration-200">Editar</button>
                <button onclick="removerFilme('${titulo.nome}', '${titulo.genero}')" class="border rounded-md border-black p-1 px-3 hover:bg-black hover:text-white hover-duration-200 duration-200">Remover</button>
            </div>
        </div>

    </div>
    `
};