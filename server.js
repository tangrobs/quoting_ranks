const express = require('express')
const path = require('path')
const bp = require('body-parser')

const app = express()
app.use(bp.json())
app.use(express.static(path.join(__dirname + '/client/dist/client')))

require('./server/routes')(app)

app.all('*',(req,res,next)=>{
    res.sendFile(path.resolve('./client/dist/client/index.html'))
})

app.listen(8000,_=>console.log("listening on port 8000"))