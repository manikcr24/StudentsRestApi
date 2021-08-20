const app = require('express')()

const PORT = 3000

var students = require('./data')

app.get('/students', (req, res) => {
    res.json(students)
})

app.get('*', (req, res) => {
    res.json('Only /students is valid URI')
})

app.listen(PORT, err => console.log(`Listening on ${PORT}`))