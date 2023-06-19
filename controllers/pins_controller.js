const express = require('express')
const router = express.Router()

const Pin = require('../models/pin')

router.get('/', (req, res) => {
  Pin
    .findAll()
    .then(pins => res.json(pins))
})

router.post('/', (req, res) => {
  const name = req.body.name
  const clue = req.body.clue
  const address = req.body.address
  const img = req.body.img

  Pin
    .create(name, clue, address, img)
    .then(pin => res.json(pin))
})

router.delete('/:id', (req, res) => {
  const pinId = req.params.id

  Pin
    .delete(pinId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router