import express from 'express';
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.post('/form', (req, res) => {
    res.send('good')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})