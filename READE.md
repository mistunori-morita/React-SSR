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
