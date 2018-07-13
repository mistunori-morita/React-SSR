# React-server-side-rendering

## webpackメモ
```js
"scripts": {
  //npm-run-allのライブラリで全部一括起動
  "dev": "npm-run-all --parallel dev:*",
  "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
  "dev:build-server": "webpack --config webpack.server.js --watch",
  "dev:build-client": "webpack --config webpack.client.js --watch"
},
```

## render時の分離
```js
//index.js(server-side-rendering)
import express from "express"
import renderer from './helpers/renderer'

const app = express();
app.use(express.static('public'))
app.get('/', (req, res) => {
  //ここで別に切り出した関数を呼び込む
  res.send(renderer());
});

app.listen(9999,() =>{
  console.log('Listening on port 9999');
});

```

```js
//renderer.js
import React from "react";
import { renderToString } from 'react-dom/server'
import Home from '../client/components/Home'
//ここで関数を作ってそれを利用することでよりコードが簡素化されて見やすくなる
export default () => {
  const content = renderToString(<Home />);

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    <html>`;
}
```


## xss攻撃の緩和（シリアライズさせる）
- `import serialize from 'serialize-javascript';`
```js
<script>
  window.INITIAL_STATE = ${JSON.stringify(store.getState())}
</script>
↓こちらに変更する
<script>
  window.INITIAL_STATE = ${serialize(store.getState())}
</script>
```
