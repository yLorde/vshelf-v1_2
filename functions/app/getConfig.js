const fs = require('node:fs');
const appPathApp = require('./appPathApp');

module.exports = function getConfig() {
    try {
        const config = fs.readFileSync(appPathApp + 'config.json', 'utf-8');
        return JSON.parse(config);
    } catch (err) {
        console.error(err);
    };
};