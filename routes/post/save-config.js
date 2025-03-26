const setConfig = require("../../functions/app/setConfig");
const setProfile = require("../../functions/profile/setProfile");

module.exports = {
    route: '/save-config',
    method: 'post',
    async execute(request, response) {
        try {
            const { username, theme } = request.headers;

            setProfile('username', username);
            setConfig('tema', theme);

            return response.status(200).json({
                status: 'success',
                username: username,
                tema: theme
            });

        } catch (err) {
            console.error(err);
        }
    }
};