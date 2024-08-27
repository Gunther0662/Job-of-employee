const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.POST || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const pool = new Pool(
    {
        user: 'postgres',
        password: 'redhead0662',
        host: 'localhost',
        database: 'job_db'
    },
    console.log('Connected to the job_db database.')
)
pool.connect();

app.post('/api/deparment_name', ({ body }, res) => {
    {
        const sql = `INSERT INTO deparment name (deparment_name)
      VALUES ($1)`;
    const params = [body.deparment_name];
    },
    pool.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

  app.get('/api/', (req, res) => {
    const sql = `SELECT id,  AS title FROM `;
  
    pool.query(sql, (err, { rows }) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  app.delete('/api//:id', (req, res) => {
    const sql = `DELETE FROM  WHERE id = $1`;
    const params = [req.params.id];
  
    pool.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: err.message });
      } else if (!result.rowCount) {
        res.json({
          message: ' not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.rowCount,
          id: req.params.id
        });
      }
    });
  });
  
  app.get('/api/', (req, res) => {
    const sql = 
    pool.query(sql, (err, { rows }) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  app.put('/api//:id', (req, res) => {
    const sql = `UPDATE = $1 WHERE id = $2`;
    const params = [req.body., req.params.id];
  
    pool.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.rowCount) {
        res.json({
          message: 'Review not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.rowCount
        });
      }
    });
  });
  
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  