import express from 'express';
const app = express()
const port = process.env.PORT || 5000
const videos = [
    {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
    {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
    {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
    {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
    {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/video', (req, res) => {
    res.send(videos)
})

app.get('/video/:id', (req, res) => {
    res.send(videos.find((el)=>el.id === +req.params.id))
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})