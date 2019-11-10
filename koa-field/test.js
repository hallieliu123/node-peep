const { log } = console;
const MyKoa = require('./2customKoa/MyKoa');
const MyRouter = require('./2customKoa/myRouter');
const myStatic = require('./2customKoa/MyStatic');
const router = new MyRouter();
const app = new MyKoa();

router.get('/',(ctx,next)=>{
  ctx.body = 'Hello world !!!';
});

app.use(myStatic('./public'));
app.use(router.routes());  // 中间件在req,res之间 


// app.use((ctx,next)=>{
//     ctx.body = '<h1>Hello</h1>';
//     next();
// });
// app.use(fn1);
// app.use(fn2);
// app.use(fn3);
app.listen(8080,()=>{
    log('listening...');
});

async function fn1(ctx,next) {
    console.log("fn1");
    await next();
    console.log("end fn1");
  }
  async function fn2(ctx,next) {
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
  }
  function fn3(ctx,next) {
    console.log("fn3");
  }
  function delay() {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        console.log('delay');
        reslove();
    }, 2000); });
  }
  
