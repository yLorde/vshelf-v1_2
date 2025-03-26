(function () {
    if (window.localStorage.getItem('tema') === 'escuro') {
        document.documentElement.style.setProperty('--background-color', '#191919');
        document.documentElement.style.setProperty('--default-bg', '#121212');
        document.documentElement.style.setProperty('--default-text', '#fff');
    } else {
        document.documentElement.style.setProperty('--background-color', '#ccc');
        document.documentElement.style.setProperty('--default-bg', '#fff');
        document.documentElement.style.setProperty('--default-text', '#000');
    };
})()