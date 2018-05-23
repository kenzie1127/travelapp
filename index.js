const express = requre('express')
const path = requre('path')
const port = process.env.PORT || 3009
const app = express()

app.use(express.static(_dirname + '/public'))

app.get('*', function (request, response) {
    response.sendfile(path.resolve(_dirname, 'public', 'index.html'))
})

app.listen(port)

console.log("server started on port" + port)