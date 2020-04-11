const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const db = require('../../models/user')
const isAuthenticated = require('../../config/middleware/isAuthenticated')
const { check, validationResult } = require('express-validator');


router.post('/user', [
  check('email').isEmail(),
  check('username').isLength({ min: 5}),
  check('password').isLength({ min: 5 })
], (req, res) => {
  
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  db.create(
     req.body.username,
     req.body.email,
     req.body.password,
  )
  
});

router.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json('success')
})

router.get('/member', isAuthenticated, (_, res) => {
  res.json('hiii')
})  

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/api/user_data', (req, res) => {
  if (!req.user[0]) {
    res.json({})
  } else {
    res.json({
      username: req.user[0].username,
      id: req.user[0].id
    })
  }
})


module.exports = router