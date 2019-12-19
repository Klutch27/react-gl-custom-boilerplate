const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));

app.use('/', (req, res, next)=>{
  res.status(404).json('The page you are looking for does not exist.');
});

app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));