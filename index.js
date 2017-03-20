const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.sendFile('index.html');
});

app.listen(3000, () => {
  console.log('Server is Up and Running on Port 3000');
})
