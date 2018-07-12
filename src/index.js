import 'babel-polyfill';
import express from "express"
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from './client/routes';


const app = express();

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()

  const promises = matchRoutes(Routes, req.path).map(({ route}) => {
    return route.loadData ? route.loadData(store) : null;
  })

  console.log(promises);
  res.send(renderer(req, store));
});

app.listen(9999,() =>{
  console.log('Listening on port 9999');
});
