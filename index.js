const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

const seasonal = [["Summer","2023"]]

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/welcome.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'))
})

app.get('/schedule', (req, res) => {
  let result = false
  seasonal.map((ss) => {
    if (req.query['ss'] == ss[0] && req.query['year'] == ss[1]) {
      result = true
    }
  })
  if (result || req.url == "/schedule") {
    res.sendFile(path.join(__dirname, '/pages/schedule.html'))
  }else {
    res.send("ไม่มีข้อมูลของซีซั่นนี้")
  }
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

app.get('/api/seasonal', (req, res) => {
  res.json(seasonal)
})

app.listen(port, () => {
  console.log(`App starting an port : ${port}`)
})