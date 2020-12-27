const express = require("express")
const db = require("../db_config")
// const checkAuth = require('../middleware/checkAuth')
const router = express.Router()

router.post('/create-profile', (req, res) =>{
  const {fname, lname, email, phone_num, country, city, profile_title, sector, skills, languages, user_id} = req.body
  const sql = `INSERT INTO freelancers_profiles (first_name, last_name, email, phone_num, country, city, profile_title, sector, skills, languages, user_id) VALUES 
    ('${fname}', '${lname}', '${email}', '${phone_num}', '${country}', '${city}', '${profile_title}', '${sector}', '${JSON.stringify(skills)}', '${JSON.stringify(languages)}', '${user_id}')`

  db.query(sql, (err, results) => {
    if (err) throw err
    res.status(201).json()
  })  
})

.post('/add-experiences', (req, res) => {
  const { experiences } = req.body, values = []
  const sql = `INSERT INTO experiences (sector, employer, description, skills, from_date, to_date, user_id) VALUES ?`
  experiences.forEach(elm =>  values.push(Object.values(elm)))
 
  db.query(sql, [values], (err, results) => { if (err) throw err })  
  
  res.status(201).json()
})


.post('/add-education', (req, res) => {
  const { education } = req.body, values = []
  const sql = `INSERT INTO education (title, institution, country, graduation_year, user_id) VALUES ?`
  education.forEach(elm =>  values.push(Object.values(elm)))
  
  db.query(sql, [values], (err, results) => { if (err) throw err })  
  
  res.status(201).json()
})

module.exports = router