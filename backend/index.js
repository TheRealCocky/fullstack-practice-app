
const express = require('express')
const app = express()
const port = 3000
const cors = require ('cors')
const buscardados = require('../backend/ControllerApi/Consumir')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors());
app.get('/pegar',buscardados);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
