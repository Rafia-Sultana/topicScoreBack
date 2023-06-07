const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const controller = require('./Controller/topic');

const port = 3000;

app.use(express.json());
app.use(cors(corsOptions))

var corsOptions={
  origin:'http://localhost:3001/',
  optionsSuccessStatus:200,
  method:['GET','POST','PUT','DELETE']
}

app.get('/', controller.getAll);
app.post('/', controller.postOne);
app.put('/:id', controller.updateOne);
app.delete('/:id', controller.deleteOne);

try {
  mongoose.connect('mongodb://127.0.0.1:27017/myApp');
  console.log('MongoDb connected');

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
