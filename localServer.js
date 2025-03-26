const express = require('express');
const { app } = require('electron');
const server = express();
const fs = require('node:fs');
const path = require('node:path');

module.exports = function localServer() {

    server.get('/', (request, response) => {
        try {
            response.redirect('https://vshelf.github.io/website')
        } catch (err) {
            console.log(err);
        };
    });

    const routesFolder = fs.readdirSync(path.join(__dirname, './routes'));
    for (const subFolders of routesFolder) {
        const files = fs.readdirSync(path.join(__dirname, `./routes/${subFolders}`)).filter(file => file.endsWith('.js'));
        for (const routeFiles of files) {
            const route = require(`./routes/${subFolders}/${routeFiles}`);
            if (String(route.method).toLowerCase() === 'post') {
                server.post(route.route, (...args) => route.execute(...args, server));
            };

            if (String(route.method).toLowerCase() === 'get') {
                server.get(route.route, (...args) => route.execute(...args, server));
            };
        };
    };

    server.listen(1703, () => { });
};