import express from "express"
import renderer from './helpers/renderer'

const app = express();


app.use(express.static('public'))
app.get('/', (req, res) => {


  res.send(renderer());
});

app.listen(9999,() =>{
  console.log('Listening on port 9999');
});
