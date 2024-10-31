const express = require('express')
const app = express()
const port = 4000

const indexRoute = require('./routes/index')
const aboutRoute = require('./routes/about')

app.use('/', indexRoute)
app.use('/about', aboutRoute)

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})