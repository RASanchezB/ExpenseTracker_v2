require('dotenv').config();

let mongoose = require('mongoose')
let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
});

const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log('successfully connected to MongoDB');
  },
);
