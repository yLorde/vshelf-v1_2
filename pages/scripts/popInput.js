// function popInput(id, placeholder, customClass) {
//     return `
//     <div class="flex items-center justify-center p-1">
//         <div
//             class="flex ${customClass} flex-col gap-2 text-black max-w-xl w-full bg-white p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
//             <div class="flex items-center justify-start">
//                 <h2>${placeholder}:</h2>
//             </div>
//             <div class="flex">
//                 <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg backdrop-blur-md p-5">
//                     <svg fill="#000000" viewBox="0 0 330 330" aria-hidden="true"
//                         class="pointer-events-none absolute w-5 fill-black transition">
//                         <path
//                             d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
//                         </path>
//                     </svg>
//                 </div>
//                 <input required type="text"class="w-full border border-white p-2 rounded-md bg-inherit text-black font-semibold outline-0" placeholder="${placeholder}" id="${id}" />
//             </div>
//         </div>
//     </div>
//     `;
// };

function popInput(id, placeholder, tema, customClass, customClass2) {
    if (tema === 'escuro') {
        customClass = 'text-white bg-[#121212] ' + customClass;
        customClass2 = 'text-white bg-[#121212] ' + customClass2;
    } else {
        customClass = 'text-black bg-white ' + customClass;
        customClass2 = 'text-black bg-white border-gray-900 ' + customClass2;
    };


    return `
    <div class="flex items-center justify-center p-1">
        <div
            class="flex ${customClass} flex-col gap-2 text-black max-w-xl w-full p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
            <div class="flex items-center justify-start">
                <h2>${placeholder}:</h2>
            </div>
            <div class="flex">
                <input required type="text"class="w-full border ${customClass2} p-2 rounded-md bg-inherit text-black font-semibold outline-0" placeholder="${placeholder}" id="${id}" />
            </div>
        </div>
    </div>
    `;
};