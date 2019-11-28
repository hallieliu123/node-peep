<<<<<<< HEAD
// 学习目标   
=======
// 学习目标
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
// 使用koa搭建服务器   
// context上下文 使用 及 源码封装  
// 中间件使用 及 源码封装   
// router使用 及 简单封装   
const { log } = console;
// 1.基本使用,创建一个服务器,使用 context 上下文
// const Koa = require('koa');
// const app = new Koa();

// app.use((cxt,next)=>{
    // cxt.response.body = 'Hello world';
    // cxt.body = 'Hello world';
// });

// app.listen(8080);

<<<<<<< HEAD
=======

>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
// 2.http response类型，默认返回'text/plain'; 通过 cxt.response.type 设置返回数据类型
/*
    const fs = require('fs');
    const Koa = require('koa');
    const app = new Koa();
    app.use((cxt,next)=>{

<<<<<<< HEAD
        // cxt.response.type = 'html'; // 实际koa可以自己判断类型  
=======
        // cxt.response.type = 'html'; // 实际koa可以自己判断类型
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
        // cxt.response.body = '<h1>Hello world!!!<h1>';

        cxt.response.type = 'html';
        cxt.response.body = fs.createReadStream('index.html'); // 返回模版
    });
    app.listen(8080);*/

// 3.路由
// 原生KOA路由
   /*  const Koa = require('koa');
    const app = new Koa();
    app.use((cxt,next)=>{
        if(cxt.request.path == '/register'){
            cxt.response.body = 'register';
        }else if(cxt.request.path == '/login'){
            cxt.response.body = 'login';
        }else{
            cxt.response.body = 'index';
        }
    });
    app.listen(8080); */


// 4.使用require('koa-static')处理静态资源
<<<<<<< HEAD
   /*  const Koa = require('koa');
=======
  /*   const Koa = require('koa');
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    const serve = require('koa-static');
    const path = require('path'); // node用来处理文件路径的模块
    const app = new Koa();
    app.use(serve(path.join(__dirname,'public'))); // 只是托管文件夹内的文件
    app.use((cxt,next)=>{
        // if(cxt.request.path == '/'){
            cxt.response.body = '看来一切都是中间件。'
        // }
    });
<<<<<<< HEAD
    app.listen(8080,()=>{
        console.log('listening');
    }); */
=======
    app.listen(8080); */
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688

// 5.使用cxt.response.redirect('/路径') 重定向
    /* const Koa = require('koa');
    const route = require('koa-route');
    const app = new Koa();
    app.use(route.get('/',(cxt)=>{
        cxt.response.body = 'index page';
    }));
    app.use(route.get('/redirect',(cxt)=>{
        log('redirect');
        cxt.response.redirect('/');
    }));
    app.listen(8080); */
// 6.中间件,因为它处在 http request 和 http response 之间来实现某种功能,所以叫做中间件;
// ***多个中间件会形成一个栈结构，以先进后出(first-in-last-out)的顺序执行；
<<<<<<< HEAD
   /*const Koa = require('koa');
=======
   /*  const Koa = require('koa');
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    const app = new Koa();
    app.use((cxt,next)=>{
        log(cxt.request);
        next();
    });
    app.use(cxt=>{
        cxt.body = 'test middleware';
    })
    app.listen(8080); */
// ***多个中间件会形成一个栈结构，以先进后出(first-in-last-out)的顺序执行；
//    ***同步中间件
   /*  const Koa = require('koa');
    const app = new Koa();
    const one = (cxt,next)=>{
        log('>>1');
        next();
        log('<<1');
    }
    const two = (cxt,next)=>{
        log('>>2');
        next();
        log('<<2');
    }
    const three = (cxt,next)=>{
        log('>>3');
        next();
        log('<<3');
    }
    app.use(one);
    app.use(two);
    app.use(three);
    app.use(cxt=>{
        cxt.response.body = 'Hello world !';
    });
    app.listen(8080); */
//  ***异步中间件
  /*   const Koa = require('koa');
    const fs = require('fs.promised');
    // const fs = require('fs');
    const app = new Koa();
    app.use( async cxt=>{
        const file = await fs.readFile('./index.html');
        cxt.response.type = 'html';
        cxt.response.body = file;
    });
    // app.use(cxt=>{
    //     fs.readFile('./index.html',(err,data)=>{
    //         log('data-->',data); // 二进制流
    //     })
    // })
    app.listen(8080,()=>{
        log('listening...');
    }); */
<<<<<<< HEAD
// ***中间件合成 koa-compose 模块
=======
// ***中间件合成 koa-compose模块
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    /* const Koa = require('koa');
    const compose = require('koa-compose'); 
    const app = new Koa();
    const one = (cxt,next)=>{
        log('1');
        next();
    }
    const two = (cxt,next)=>{
        log('2');
        next();
    }
    app.use(compose([one,two]));
    app.use(cxt=>{
        cxt.response.body = 'Hello world';
    })
    app.listen(8080,()=>{
        log('listening...');
    }); */

// 7.错误处理,返回错误信息,cxt.response.status = 404; 或 cxt.throw(404);
    /* const Koa = require('koa');
    const app = new Koa();
    app.use(ctx=>{
        // ctx.throw(500);  // 后端代码运行错误,500错误第二个参数没用
        // ctx.throw(401, 'access_denied');
        // ctx.throw(404,'id required'); // 资源未找到  

        // ctx.response.status = 404;
        // ctx.response.body = '未找到资源';
    });
    app.listen(8080,()=>{
        log('listening !!!');
    }); */
    
<<<<<<< HEAD
// 常见状态码 13 个
/**
 * 200 请求成功返回 ok
 * 302 暂时重定向
 * 304 后端数据未修改,使用浏览器缓存
=======
// 常见状态码 14 个
/**
 * 200 请求成功返回 ok
 * 304 后端数据未修改,使用浏览器缓存
 * 307 暂时重定向
 * 308 永久重定向
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
 * 400 bad request 请求报文中有错误(前端参数有错误)
 * 401 unauthorized 未授权访问
 * 403 forbidden 禁止访问,请求访问的资源被服务器拒绝了
 * 405 method not allowed 请求方式错误
 * 404 not found 服务器上没有请求的资源
 * 408 request timeout 请求超时
 * 500 internal server error 服务器代码在执行请求过程中发生错误
 * 502 bad gateway,网关错误,从下游服务器收到无效响应
 * 504 gateway timeout 未及时从下游服务器收到响应 
 * 505 http version not supported 服务器不支持当前http协议版本
 */

 // 8.处理中间件中可能的错误,最外层中间件使用try{}catch(){}  或  监听error事件 app.on('error',(err,ctx)={});
  /*   const Koa = require('koa');  
    const app = new Koa();
    const one = async (ctx,next) => {
        try{
            await next();
        }catch(err){
            ctx.response.status = err.statusCode || err.status || 500;
            ctx.response.type = 'html';
            ctx.response.body = '<h3>something is wrong !</h3>';
        }
    }
    const two = (ctx,next)=>{
        ctx.response.
        log('two');
        next();
    }
    app.use(one);
    app.use(two);
    app.use(ctx=>{
        ctx.response.type = 'text/plain';
        ctx.response.body = '<h2>test catch error</h2>';
    });
    // app.on('error',(err,ctx)=>{
    //     log('error error ----> ',err);
    // })
    app.listen(8080,(err)=>{
        log('err--->',err);
        log(`listening...`);
    }); */

// 9.Cookies,使用 ctx.cookies.set('',''); ctx.cookies.get(''); 来设置和获取cookie
    /* const Koa = require('koa');
    const app = new Koa();
    app.use(ctx=>{
        let val = parseInt(ctx.cookies.get('views')) || 0;
        ++val;
        ctx.response.type = 'text/html';
        ctx.response.body = `<h5>test cookies: ${ val } views</h5>`;
        ctx.cookies.set('views',val)
    });
    app.listen(8080,()=>{
        log('listening...');
    }); */
// 10.koa-router模块化开发
   /*  const Koa = require('koa');
    const app = new Koa();
    const Router = require('koa-router');
    const user = require('./user');
    const route = new Router();
<<<<<<< HEAD
    app.use(route.routes()); // 注册路由，返回一个匹配请求的路由中间件     
=======
    app.use(route.routes()); // 注册路由，返回一个匹配请求的路由中间件
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    app.use(route.allowedMethods()) // 返回一个中间件，如果请求方式有错误，抛出错误
    route.use('/user',user.routes());   
    app.listen(8080,()=>{
        log('listening...');
    }); */
// 11.koa-body处理post方式请求体,将post请求体解析为json使用
    /* const Koa = require('koa');
    const app = new Koa();
    const fs = require('fs.promised');
    const Router = require('koa-router');
    const koaBody = require('koa-body');
   
    const route = new Router();
    const user = require('./user');
    app.use(koaBody({multipart:true})); // 支持文件上传
    // app.use(async (ctx,next)=>{
    //     if(ctx.request.url == '/'){
    //         const file = await fs.readFile('./index.html');
    //         ctx.response.type = 'text/html';
    //         ctx.response.body = file;
    
    
    //         // const r = fs.createReadStream('./index.html');
    //         // ctx.response.type = 'text/html';
    //         // ctx.response.body = r;
    //         return 
    //     }
    //     ctx.response.body = 'blank';
    // });

<<<<<<< HEAD
    app.use(route.routes());   
    app.use(route.allowedMethods());   
=======
    app.use(route.routes());
    app.use(route.allowedMethods());
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    route.get('/',async (ctx,next)=>{
        const file = await fs.readFile('./index.html');
        ctx.response.type = 'text/html';
        ctx.response.body = file;
    });
    route.use('/user',user.routes());
    app.listen(8080,()=>{
        log('I am listening...');
    });
 */
// 12.kao-body实现文件上传
<<<<<<< HEAD
   /*  const Koa = require('koa');
=======
    const Koa = require('koa');
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
    const app = new Koa();
    const Router = require('koa-router');
    const route = new Router();
    const fs = require('fs.promised');
    const user = require('./user');
    const koaBody = require('koa-body');
    app.use(koaBody({multipart:true, formidable: {maxFileSize: 200*1024*1024}}));// 设置上传文件大小最大限制，默认2M
    app.use(route.routes());
    app.use(route.allowedMethods());
    route.get('/',async ctx=>{
        const f = await fs.readFile('./index.html');
        ctx.response.type = 'html';
        ctx.response.body = f;
    });
    route.use('/user',user.routes())
    app.listen(8080,()=>{
        log('listening...');
    });
<<<<<<< HEAD
 */



    
=======

>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
