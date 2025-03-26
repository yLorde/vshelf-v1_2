const appPathApp = require("../app/appPathApp");
const fs = require('node:fs');
const getProfile = require("./getProfile");

module.exports = function setProfile(param, value) {
    try {
        const profile = getProfile();
        profile[param] = value;

        fs.writeFileSync(appPathApp + 'profile.json', JSON.stringify(profile));
    } catch (err) {
        console.error(err);
    };
};
