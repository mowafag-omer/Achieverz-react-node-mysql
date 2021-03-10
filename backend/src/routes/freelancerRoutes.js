const express = require("express")
const db = require("../db_config")
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()

router.get('/profile/:id', checkAuth, (req, res) => {
  const sql = `SELECT * FROM freelancers_profiles WHERE user_id = '${req.params.id}'`

  db.query(sql, (err, results) => {
    if(err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json("No Content")
    }
  })
})

.get('/profiles', checkAuth, (req, res) => {
  const sql = 'SELECT * FROM freelancers_profiles'

  db.query(sql, (err, results) => {
    if(err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json("No Content")
    }
  })
})

.get('/experiences/:id', checkAuth, (req, res) => {
  const sql = `SELECT * FROM experiences WHERE user_id = '${req.params.id}'`

  db.query(sql, (err, results) => {
    if(err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json("No Content")
    }
  })
})

.get('/all-experiences', checkAuth, (req, res) => {
  const sql = 'SELECT * FROM experiences'

  db.query(sql, (err, results) => {
    if(err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json("No Content")
    }
  })
})

.post('/create-profile', (req, res) =>{
  const sql = 'INSERT INTO freelancers_profiles (first_name, last_name, email, phone_num, city, country, profile_title, bio, category, skills, user_id) VALUES ?'

  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err
    res.status(201).json('created !')
  })  
})

.post('/add-experiences', (req, res) => {
  const values = []
  const sql = `INSERT INTO experiences (role, employer, from_date, to_date, description, user_id) VALUES ?`
  req.body.forEach(elm =>  values.push(Object.values(elm)))

  db.query(sql, [values], (err, results) => { 
    if (err) throw err 
  
    res.status(201).json('Experiences added !')
  })  
})

// .post('/add-education', (req, res) => {
//   const { education } = req.body, values = []
//   const sql = `INSERT INTO education (title, institution, country, graduation_year, user_id) VALUES ?`
//   education.forEach(elm =>  values.push(Object.values(elm)))
  
//   db.query(sql, [values], (err, results) => { if (err) throw err })  
  
//   res.status(201).json()
// })

module.exports = router