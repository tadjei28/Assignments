
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const connectDB = require('./mongo')

const server = express()
const port = 5000
server.use(express.json())
server.use(cors())
connectDB()


server.use('/api/v1',routes)



server.listen(port, ()=> console.log("Server is running on port 5000"))