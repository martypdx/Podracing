const router = require('express').Router();
// const User = require('../models/user');
const respond = require('../utils/respond');


module.exports = router

    .post('/signup', respond( async req => {

        // const { email , password } = req.body;
        delete req.body.password;

        // if (!password) throw { code: 400, error: 'password required' };

        // const exists = await User.hasEmail(email);

        // if (exists) {
        //     throw { code: 400, error: 'email already exists'};
        // }

        // const user = new User(req.body);
        // user.generateHash(password);

        // await user.save();
        return { token: 'placeholder' };
        
    }));