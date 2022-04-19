const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const api = require('./api');

app.get('/', (req, res) =>{
    res.send("Hello world");
})

app.use("/api",api);


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});

