import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express()

//middleware
app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.use('/gifts', giftsRouter) //used for making endpoint to retrieve data

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})


const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})