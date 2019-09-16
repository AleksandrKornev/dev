const Router = require('express').Router;
const mongoose = require('mongoose');
const to = require('await-to-js').to;

const db = require('../../db');

const router = Router();

const userScheme = require('../../schemes').user; 
const User = mongoose.model("User", userScheme);

router.get('/', async function(req, res, next) {
  await db('users', async function() {
    let [err, data] = await to(User.find({}));
    if(err) return res.status(500).json({ message: err.message });

    res.status(200).json({ data });
  });
})

router.post('/', async function(req, res, next) {
  let user = new User(req.body);
  
  let [err, data] = await to(user.validate());
  if (err) return res.status(400).json({ message: err.message })
  
  await db('users', async function() {
    let [err, data] = await to(user.save());
    if (err) {
      if (err.message.indexOf('duplicate') != -1) {
        return res
          .status(409)
          .json({ message: "Такой пользователь уже есть" })
      }
    }

    return res
      .status(201)
      .json({ 
        message: "Пользователь успешно зарегистрирован"
      });
  });
})

module.exports = router;