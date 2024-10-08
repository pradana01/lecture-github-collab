const router = require('express').Router();
const Controller = require('../controllers');

router.get('/', () => {
    console.log("Bukan gue yang buat home")
});

router.get('/login', Controller.login);


router.get('/register', Controller.register);

module.exports = router;
