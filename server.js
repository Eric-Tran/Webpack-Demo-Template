const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname)
app.use(express.static(__dirname + '/build/'));

app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname, '/build/index.html'))
})
app.listen(process.env.PORT || 5000);