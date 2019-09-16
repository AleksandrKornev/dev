const Router = require('express').Router;
const mongoose = require('mongoose');
const to = require('await-to-js').to;

const db = require('../../db');

const router = Router();

const userScheme = require('../../schemes').user; 
const User = mongoose.model("User", userScheme);

router.post('/', async function(req, res, next) {
  await db('users', async function() {
    let [err, data] = await to(
      User.findOne({
        login: req.body.login,
        password: req.body.password
      })
    );
    if (err) return res.status(500).json({ message: err.message });

    return res
      .status(200)
      .json({
        message: "Пользователь авторизирован"
      })
  })
})

module.exports = router;