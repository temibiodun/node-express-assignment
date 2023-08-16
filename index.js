const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/api/users'))




app.listen(8000, () => {
    console.log('Server is running on port 8000') 
})

