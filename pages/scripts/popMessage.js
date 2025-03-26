// function popMessage(message, customClass, customClass2) {
//     return `
//     <div class="flex ${customClass} cursor-pointer text-center items-center justify-center">
//         <div class="flex ${customClass2 ? customClass2 : 'bg-white'} flex-col k gap-2 max-w-xl w-full p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
//             <div class="flex-row justify-between w-full">
//                 <h3 class="text-xl font-bold">${message}</h3>
//             </div>
//         </div>
//     </div>
//     `;
// };

function popMessage(message, tema, customClass, customClass2) {
    if (tema === 'escuro') {
        customClass = 'text-white ' + customClass
        customClass2 = 'bg-[#121212] ' + customClass2;
    } else {
        customClass = 'text-black ' + customClass;
        customClass2 = 'bg-white ' + customClass2;
    };

    return `
    <div class="flex ${customClass} cursor-pointer text-center items-center justify-center">
        <div class="flex ${customClass2} flex-col k gap-2 max-w-xl w-full p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
            <div class="flex-row justify-between w-full">
                <h3 class="text-xl font-bold">${message}</h3>
            </div>
        </div>
    </div>
    `;
};