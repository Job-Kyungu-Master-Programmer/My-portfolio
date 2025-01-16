const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')



// Middleware 
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use(express.static('/opt/render/project/src/dist'))

//Server static 
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})