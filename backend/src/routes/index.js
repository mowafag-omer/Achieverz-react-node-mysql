const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const checkAuth = require('../middleware/checkAuth')
const db = require('../db_config')
const router = express.Router()

router.post('/sign-up', (req, res) => {
  const { email, password, type } = req.body 
  const pass = bcrypt.hashSync(password, 10)
  const insertsql = `INSERT INTO users (email, password, type) VALUES ('${email}', '${pass}', '${type}')`
  const selectsql = `SELECT * FROM users WHERE email = '${email}'`
  
  db.query(selectsql, (err, results) => {
    if (err) throw err
    if(results.length){
      res.status(409).json({err_msg: 'This email already registered !'})
    } else {
      db.query(insertsql, (err) => { 
        if (err) throw err
        res.status(201).json({succ_msg: 'successfully registered'}) 
      })
    }  
  })
})

module.exports = router