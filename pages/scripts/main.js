(async function () {
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--default-bg', '#121212');
    document.documentElement.style.setProperty('--default-text', '#fff');

    const appId = localStorage.getItem("app_id");
    if (!appId) {
        const id = Math.random().toString(36).substring(2, 9);
        localStorage.setItem("app_id", id);
    } else {
        console.log('App ID: ', appId);
        await fetch(`https://api.ylorde.com.br/api/v1/vshelf/app?app_id=${appId}`);
    }
})()