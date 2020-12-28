const express = require("express")
const db = require("../db_config")
// const checkAuth = require('../middleware/checkAuth')
const router = express.Router()

router.post('/post-job', (req, res) => {
  sql = `INSERT INTO jobs (job_title, job_description, required_sector, required_skills, num_freelancer_required, duration, budget, job_status, posting_date, user_id) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})

.delete('/delete-job/:id', (req, res) => {
  sql = `DELETE FROM jobs WHERE id = ${req.params.id}`
  
  db.query(sql, (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})

.post('/add-application', (req, res) => {
  sql = `INSERT INTO applications (job_id, user_id, status) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})


module.exports = router