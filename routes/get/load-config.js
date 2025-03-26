const getConfig = require("../../functions/app/getConfig");
const setConfig = require("../../functions/app/setConfig");
const getProfile = require("../../functions/profile/getProfile");

module.exports = {
    route: '/load-config',
    method: 'GET',
    async execute(request, response) {
        try {
            if (getConfig().tema != 'claro' && getConfig().tema != 'escuro') {
                setConfig('tema', 'claro');
            };

            const config = {
                username: getProfile().username,
                tema: getConfig().tema
            };

            return response.json(config);
        } catch (err) {
            console.error(err);
        }
    }
};