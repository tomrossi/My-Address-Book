const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
app.use(cors());
app.use(express.json());
// getting-started.js
var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
//mongodb://127.0.0.1/testdb
mongoose.connect('mongodb://localhost/my-address-book-app',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected!")
});

var phoneAddressSchema = new mongoose.Schema({
  nome: String , numero:String
});

var PhoneNumber = mongoose.model('phoneNumber',phoneAddressSchema); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/phoneNumber', (req, res) => {
  PhoneNumber.find(function(err,phoneNumber){
    if(err){
      res.statusCode=400;
      res.send({err:err});
    }
    res.send(phoneNumber);
  })
});


app.post('/phoneNumber', (req, res) => {
  const nomeIn = req.body.nome;
  const numeroIn = req.body.numero;
  var phoneNumber=new PhoneNumber({
    nome:nomeIn,
    numero:numeroIn
  });

  phoneNumber.save(function(err,phoneNumber){
    if(err){
      res.statusCode=400;
      res.send({err:err});
    }
    console.log(phoneNumber);
    res.send(phoneNumber);
  })
});

app.delete("phoneNumber(id)",(req,res)=>{
  const {id} = req.params;
  console.log(id);
  PhoneNumber.findByIdAndDelete(id,function(err,doc){
    console.log(id);
    if(err){
      console.log("errore")
      res.statusCode=400;
      res.send({err:err});
    }
  })
})



app.put('/phoneNumber/:id', (req, res) => {
  const {nome,numero} = req.body;
  const {id} = req.params;
  console.log("update->",nome,numero,id);
  PhoneNumber.findByIdAndUpdate(id,{nome,numero},function(err,phoneNumber){
    if(err){
      res.statusCode=400;
      res.send({err:err});
    }
    console.log("UPDATE",phoneNumber);
    res.send(phoneNumber);
  })

  
});



app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});







