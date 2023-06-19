const pg = require('pg')

const db = new pg.Pool({
  database: 'ade_board',
  password: 'test'
})

module.exports = db