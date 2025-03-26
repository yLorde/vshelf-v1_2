const { app } = require("electron");
const getProfile = require("../../functions/profile/getProfile");
const getConfig = require("../../functions/app/getConfig");

module.exports = {
    route: '/load-homepage',
    method: 'GET',
    async execute(request, response) {
        try {

            const profile = getProfile();
            const version = app.getVersion();

            return response.json({
                username: profile.username,
                version: version,
                tema: getConfig().tema
            });

        } catch (err) {
            console.error(err);
        };
    }
}