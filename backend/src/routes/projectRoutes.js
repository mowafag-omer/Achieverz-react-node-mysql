const express = require("express")
const db = require("../db_config")
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()



router.get('/projects/:id', checkAuth, (req, res) => {
  sql = `SELECT * FROM projects WHERE user_id = ${req.params.id} ORDER BY posting_date DESC` 

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json()
    }
  })
})

.get('/projects', checkAuth, (req, res) => {
  sql = 'SELECT employers_profiles.*, employers_profiles.user_id AS employerId, projects.* FROM projects JOIN employers_profiles ON projects.user_id = employers_profiles.user_id ORDER BY projects.posting_date DESC' 

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json('non content')
    }  
  })  
})  

.post('/post-project', checkAuth, (req, res) => {
  // sql = `INSERT INTO projects (project_title, project_description, required_category, required_skills, budget, min_budget, max_budget, project_status, user_id) VALUES ?`

  const sql = 'INSERT INTO projects (project_title, project_description, required_category, required_skills, budget, min_budget, max_budget, project_status, user_id) VALUES ?'
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json('Votre projet est bien posté !')
  })  
})

.delete('/delete-project/:id', checkAuth, (req, res) => {
  console.log('deleted');
  sql = `DELETE FROM projects WHERE id = ${req.params.id}`
  
  db.query(sql, (err, results) => {
    if (err) throw err 
    res.status(200).json()
  })  
})


.get('/fr-applications/:id', checkAuth, (req, res) => {
  sql = `SELECT * FROM applications WHERE freelancer_id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err
    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json([])
    }
  })
})

.get('/em-applications/:id', checkAuth, (req, res) => {
  sql = `SELECT * FROM applications WHERE employer_id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err

    if(results.length) {
      res.status(200).json(results)
    } else {
      res.status(204).json()
    }
  })
})

.post('/add-application', checkAuth, (req, res) => {
  sql = `INSERT INTO applications (project_id, freelancer_id, employer_id, status) VALUES ?`
  
  db.query(sql, [[Object.values(req.body)]], (err, results) => {
    if (err) throw err 
    res.status(201).json('Added')
  })  
})

.put('/update-project/:id', checkAuth, (req, res) => {
  sql = `UPDATE projects SET project_status = '${req.body.status}' WHERE id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err 
    res.status(201).json('updated')
  })  
})

.put('/update-application/:id', checkAuth, (req, res) => {
  sql = `UPDATE applications SET status = '${req.body.status}' WHERE id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err 
    res.status(201).json('updated')
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

module.exports = router