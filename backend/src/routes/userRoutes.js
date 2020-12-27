const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const checkAuth = require('../middleware/checkAuth')
const db = require("../db_config")
const router = express.Router()

router
  .post("/sign-up", (req, res) => {
    const { email, password, type } = req.body
    const pass = bcrypt.hashSync(password, 10)
    const insertsql = `INSERT INTO users (email, password, type) VALUES ('${email}', '${pass}', '${type}')`
    const selectsql = `SELECT * FROM users WHERE email = '${email}'`

    db.query(selectsql, (err, results) => {
      if (err) throw err
      if (results.length) {
        res.status(409).json({ err_msg: "This email already registered !" })
      } else {
        db.query(insertsql, (err) => {
          if (err) throw err
          res.status(201).json({ succ_msg: "successfully registered" })
        })
      }
    })
  })

  .post("/sign-in", (req, res) => {
    const { email, password } = req.body
    const selectsql = `SELECT * FROM users WHERE email = '${email}'`
    db.query(selectsql, (err, results) => {
      if (err) throw err
      if (results[0] && bcrypt.compareSync(password, results[0].password)) {
        const token = jwt.sign(
          {
            userId: results[0].id,
            email: results[0].email,
            type: results[0].type,
          },
          "itssecretso",
          { expiresIn: "1h" }
        )
        res.status(201).send({ token: token })
      } else if (!results[0]) {
        res.status(404).send({ msg: "Sorry, this user isn't recognized" })
      } else {
        res.status(401).send({ msg: "Wrong password, try again !" })
      }
    })
  })

module.exports = router