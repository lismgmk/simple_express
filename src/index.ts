import express from 'express';
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.post('/form', (req, res) => {

    if(req.body.phone === '(000) 000-0000'){
        res.status(400).send({message: 'Форма отправлена некорректно'})
    } else{
        res.status(200).send({message: 'Форма успешно получена сервером'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})