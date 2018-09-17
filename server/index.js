const express = require('express');
const app = express(); 
const port = 3001; 
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');

app.use(bodyParser.json());

// app.get('/api/jokes/getOne', controller.getOneRandomJoke); 
// app.get('/api/jokes/getTen', controller.getTenRandomJokes);
// app.get('/api/jokes/getAllSixty', controller.getAllSixtyJokes); 

app.get('/api/jokes', controller.read); 
app.post('/api/jokes', controller.create);
app.delete('/api/jokes/:id', controller.remove);
app.put('/api/jokes/:id', controller.update);

app.listen(port,()=>console.log(`Server listening at ${port}`));

