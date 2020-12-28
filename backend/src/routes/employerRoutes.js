const express = require("express")
const db = require("../db_config")
// const checkAuth = require('../middleware/checkAuth')
const router = express.Router()

router.post('/create-profile', (req, res) => {
  sql = `INSERT INTO employers_profiles (first_name, last_name, email, phone_num, country, city, user_id) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})

.put('/update-profile/:id', (req, res) => {
  const data = req.body
  const fields = Object.keys(data).map(e => data[e] && `${e} = "${data[e]}"`).join(', ')
  const sql = `UPDATE users SET ${fields} WHERE id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err
    res.status(201).json(results) 
  })
})

module.exports = router