const fs = require("node:fs");
const appPathApp = require("./appPathApp");
const getConfig = require("./getConfig");

module.exports = function setConfig(param, value) {
    try {
        const config = getConfig();
        config[param] = value;

        fs.writeFileSync(appPathApp + 'config.json', JSON.stringify(config));
    } catch (err) {
        console.error(err);
    }
};