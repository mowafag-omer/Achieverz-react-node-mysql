const express = require("express")
const db = require("../db_config")
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()

router.get('/projects/:id', (req, res) => {
  sql = `SELECT * FROM projects WHERE user_id =${req.params.id}` 

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json()
    }
  })
})


.post('/post-project', (req, res) => {
  sql = `INSERT INTO projects (project_title, project_description, required_sector, required_skills, num_freelancer_required, budget, project_status, user_id) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})

.delete('/delete-project/:id', (req, res) => {
  sql = `DELETE FROM projects WHERE id = ${req.params.id}`
  
  db.query(sql, (err, results) => {
    if (err) throw err 
    res.status(200).json()
  })  
})


.get('/categories', checkAuth, (req, res) => {
  sql = 'SELECT * FROM categories'

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json()
    }
  })
})

.get('/skills', checkAuth, (req, res) => {
  sql = 'SELECT * FROM skills WHERE status = "confirmed"'

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json()
    }
  })
})

.post('/add-application', (req, res) => {
  sql = `INSERT INTO applications (project_id, user_id, status) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json()
  })  
})


module.exports = router