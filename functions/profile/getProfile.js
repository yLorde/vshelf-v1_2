const appPathApp = require("../app/appPathApp");
const fs = require('node:fs');

module.exports = function getProfile() {
    try {
        const profile = fs.readFileSync(appPathApp + 'profile.json', 'utf-8');
        return JSON.parse(profile);
    } catch (err) {
        console.error(err);
    };
};