const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Testando...')
})

const pingRouter = require('./routes/ping.router')
app.use('/ping', pingRouter)


app.listen(3000, ()=> console.log('Server is running in port 3000')
)