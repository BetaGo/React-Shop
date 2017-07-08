const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router();

router.get('/api/goods/goods-list', (ctx, next) => {
  try {
    const data = fs.readFileSync( path.resolve(__dirname, 'mock/goodsList.json') , 'utf-8');
    ctx.body = data;
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
  next();
});

router.get('/api/goods/goods-detail', (ctx, next) => {
  try {
    const data = fs.readFileSync( path.resolve(__dirname, 'mock/goodsDetail.json') , 'utf-8');
    ctx.body = data;
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
  next();
});

router.get('/api/goods/order-list', (ctx, next) => {
  try {
    const data = fs.readFileSync( path.resolve(__dirname, 'mock/orderList.json') , 'utf-8');
    ctx.body = data;
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
  next();
});

router.get('/api/goods/shopping-cart-list', (ctx, next) => {
  try {
    const data = fs.readFileSync( path.resolve(__dirname, 'mock/shoppingCartList.json') , 'utf-8');
    ctx.body = data;
  } catch (err) {
    ctx.body = {
      error: err,
    }
  }
  next();
});

router.get('/hello', (ctx, next) => {
  ctx.body = "hello";
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);