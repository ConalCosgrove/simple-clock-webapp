const express = require('express');
const app = express();
const port = process.env.PORT;
const sendIndex = (_req, res) => {
    res.sendFile(__dirname + '/index.html');
};
app.use(express.static(__dirname + '/public'))
app.get('/', sendIndex);

app.listen(port, () => {
    console.log('listening');
})