
const express = require('express');

const bodyParser = require('body-parser');





const app = express()
const port = 8080



app.use(express.static('public'))

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.status(404).send("<h1> opps! page not found 😫, try again</h1>")

})







app.listen(port, () => {console.log(`listening on port: ${port}`)})