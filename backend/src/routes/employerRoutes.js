const express = require("express")
const router = express.Router()
const db = require("../db_config")
const checkAuth = require('../middlewares/checkAuth')

router.post('/create-profile', (req, res) => {
  sql = `INSERT INTO employers_profiles (first_name, last_name, email, phone_num, country, city, company, company_name, location, user_id) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})

.get('/employer/:id', checkAuth, (req, res) => {
  const sql = `SELECT * FROM employers_profiles WHERE user_id = '${req.params.id}'`

  db.query(sql, (err, results) => {
    if(err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json("No Content")
    }
  })
})

.put('/update-profile/:id', (req, res) => {
  const data = req.body
  const fields = Object.keys(data).map(e => data[e] && `${e} = "${data[e]}"`).join(', ')
  const sql = `UPDATE users SET ${fields} WHERE id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err
    res.status(200).json(results) 
  })
})

module.exports = router