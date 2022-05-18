const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const alunos = ['edgar', 'jef', 'fabio', 'andre']

app.get('/', (req, res) => {
  res.json(alunos)
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server run!')
})
