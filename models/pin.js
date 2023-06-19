const db = require('../db/db')

const Pin = {
  findAll: () => {
    const sql = 'SELECT * FROM pins'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, review, address, img) => {
    const sql = `
      INSERT INTO pins(name, review, address, img)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `

    return db
      .query(sql, [name, review, address, img])
      .then(dbRes => dbRes.rows[0])
  },

  delete: pinId => {
    const sql = `
      DELETE FROM pins WHERE id = $1
    `

    return db.query(sql, [pinId])
  }
}

module.exports = Pin