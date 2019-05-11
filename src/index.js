const app = require('./app')
const port = process.env.PORT

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})