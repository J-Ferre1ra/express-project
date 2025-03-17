const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 3000
const apiUrl = process.env.API_URL || `http://localhost:${port}`

app.get('/', (req, res)=>{
    res.send('Testando...')
})

const pingRouter = require('./routes/ping.router')
app.use('/ping', pingRouter)

const productsRouter = require('./routes/products.router')
app.use('/products', productsRouter)

const helloRouter = require('./routes/hello.router')
app.use('/hello', helloRouter)

const middlewareRouter = require('./middlewares/errorMiddleware')
app.use(middlewareRouter)


app.listen(port, ()=> console.log(`Server is running in port ${port}`)
)