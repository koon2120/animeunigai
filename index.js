const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/welcome.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'))
})

app.get('/schedule', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/schedule.html'))
})

app.get('/privacy_policy', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/privacy_policy.html'))
})

app.get('/cookie_policy', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/cookie_policy.html'))
})

app.get('/term_of_service', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/term_of_service.html'))
})

app.listen(port, () => {
  console.log(`App starting an port : ${port}`)
})