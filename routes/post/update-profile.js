const setProfile = require("../../functions/profile/setProfile");

module.exports = {
    route: '/update-profile',
    method: 'post',
    async execute(request, response) {
        try {
            const { username } = request.headers;
            setProfile('username', username);

            return response.status(200).json({
                status: 'success'
            });
        } catch (err) {
            console.error(err);
        };
    }
}