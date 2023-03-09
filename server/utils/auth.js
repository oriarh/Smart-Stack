const jwt = require('jsonwebtoken');

const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, { maxAge: expiration });
            req.users = data;
        } catch {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration});
    },
};