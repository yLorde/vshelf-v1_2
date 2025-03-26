const getProfile = require("../../functions/profile/getProfile");

module.exports = {
    route: '/get-profile',
    method: 'get',
    async execute(request, response) {
        try {
            const { target } = request.headers;
            const data = getProfile();

            const result = data[target];

            response.json(result);

        } catch (err) {
            console.error(err);
        };
    }
}