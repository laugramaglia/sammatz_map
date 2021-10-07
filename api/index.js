/**
import data from './data'

const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
for (let value of data)
app.get(`/${value.name}`, (req, res) => {
  res.json(value)
})

export default app
 */
