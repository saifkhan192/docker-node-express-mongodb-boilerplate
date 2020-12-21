const basicAuth = (req, res, next) => {
    // check for basic auth header

    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.end('Unauthorized');
    }
    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    console.log(credentials);

    // const user = await userService.authenticate({ username, password });
    // if (!user) {
    //     return res.status(401).json({ message: 'Invalid Credentials' });
    // }

    if (credentials && username == process.env.AUTH_USER && password == process.env.AUTH_PASSWORD) {
        // authentication is successfull
        return next();
    }

    res.setHeader('WWW-Authenticate', 'Basic');
    res.end('Unauthorized');
};

module.exports = basicAuth;