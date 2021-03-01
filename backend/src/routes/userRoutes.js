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
    const values = {email: email, pass: pass, type: type}
    const insertsql = `INSERT INTO users (email, password, type) VALUES ?`
    const selectsql = `SELECT * FROM users WHERE email = '${email}'`

    db.query(selectsql, (err, results) => {
      if (err) throw err
      if (results.length) {
        res.status(409).json("This email already registered !")
      } else {
        db.query(insertsql, [[Object.values(values)]], (err) => {
          if (err) throw err
          res.status(201).json("successfully registered")
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
        res.status(404).send("Désolé, cet utilisateur n'est pas reconnu")
      } else {
        res.status(401).send("Mauvais mot de passe, réessayez!")
      }
    })
  })

module.exports = router
