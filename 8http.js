const { log } = console;

// node 核心模块 之 http

// 网络通信的过程
// 客户端发送一个 http 请求到指定的服务端 --> 服务端接收并处理请求 --> 返回数据到客户端

// 搭建一个http的服务器，用于处理用户发送的http请求

// 1.加载 http 模块
// const http = require('http');

// const url = rquire('url');

// 2.通过http模块下的createServer()方法创建并返回一个web服务器对象
// let server = http.createServer((request,reponse)=>{
    // log('接收到请求了。。。');
    // log('httpVersion-->',request.httpVersion);
    // log(request.headers);
    // log(request.cookie);
    // log(request.url);
    // log(request.method);
    // log(request.cookie);

    // reponse.writeHead(200,'describle status',{ 'content-type': 'text/html;charset=utf-8'});
    // reponse.write('<h1>Hello world!<h1>');
    // reponse.end();

    // reponse.statusCode = 200;
    // reponse.end('Hello world!');
    
    // 

// });

// server.setTimeout(1000); // 调用web服务器的setTimeout方法，设置超时时间。

// server.on('error',(err)=>{
//     log('err--->',err);
// })
// server.on('listening',()=>{
//     log('监听成功');
// })
// server.on('request',(request,reponse)=>{
//     log('接收到请求了...');
// })

// 3.server.listen(port,[hostname],[backlog],[callback]); 监听客户端连接请求,只有调用了listen方法后服务器才开始工作
//   port: 监听的端口号     hostname: 可选，IP | 域名    backlog: 连接等待队列的最大长度 
//   callback: listen方法成功开启监听以后，会触发一个listening事件，该参数作为该事件的执行函数
// server.listen(8080,'localhost');

// log(server.address()); // 返回web服务器地址信息

// ** 4.request参数
// request事件中回调函数的参数： request, response
// request参数对象，保存着很多请求信息：
//    httpVersion:http协议版本,url,method,cookie等
//    headers中有：host:'',connection:'keep-alive','cache-control':'max-age=0','user-agent':'',...
//    url: 请求路径
//    method: 请求方式
//    cookie: 请求所携带的cookie

// ** 5.response参数
// request事件中回调函数的参数： request, response
// response参数对象,提供操作响应数据的一系列方法
//    res.setHeader('name','value') 设置返回头信息 ( 不要与res.writeHead(statusCode,[和状态码对应的文字],[设置返回头信息=res.setHeader()]))
//    res.statusCode = 200; 设置返回状态码
//    res.writeHead(statusCode,[和状态码对应的文字],[设置返回头信息=res.setHeader()]); 
//    res.write('content'); 正文信息写入
//    res.end(): 当所有正文和返回头信息都发送完以后调用该方法，告诉服务器所有数据都发送完成了，这个方法每次必须调用，也必须最后调用。

// 6.url模块，提供处理url参数的方法
// const url = rquire('url');
// let urlJson = url.parse(req.url);

const http = require('http');
const fs = require('fs');
const url = require('url');
let server = http.createServer((req,res)=>{
    let urlJson = url.parse( req.url );
    // urlJson.query: 储存着查询字符串
    // urlJson.pathname: 储存着url路径,
    // urlJson.href: 储存着完整url
    // if(urlJson.pathname.search(/index/)>-1){
    //     res.writeHead(200,'describe status',{'content-type':'text/html;charset=utf-8'});
    //     res.end('<h1>首页</h1>');
    // }else if(urlJson.pathname.search(/user/)>-1){
    //     res.writeHead(200,'describe status',{'content-type':'text/html;charset=utf-8'});
    //     res.end('<h1>个人中心</h1>');
    // }else{
    //     res.writeHead(404,'describe status',{'content-type':'text/html;charset=utf-8'});
    //     res.end('<h1>not found</h1>');
    // }
    // fs.createReadStream('./1.jpg').pipe(res); // res 
});
server.setTimeout(4000);
server.listen(3000,'localhost'); 

// 7.fs 实现 表现，行为 分离
/*
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = __dirname + '/html'
const querystring = require('querystring');  // querystring.parse()将查询字符串反序列化为一个对象； querystring.stringify() 反之
const server = http.createServer((req,res)=>{
    let urlJson = url.parse(req.url);
    // log(urlJson);
    if(urlJson.pathname =='/'){
        let page = path + '/index.html';
        getHtml(page,req,res);
        return
    }else if(urlJson.pathname == '/user'){
        let page = path + '/user.html';
        getHtml(page,req,res);
        return
    }else if( urlJson.pathname == '/login'){
        let page = path + '/login.html';
        getHtml(page,req,res);
        return
    }else if( urlJson.pathname == '/login/check'){
        // log(req.method);
        // get请求处理
        // log(urlJson.query);
        // let q = querystring.parse(urlJson.query);
        // log(q.username);
        if(req.method.toUpperCase()=='GET'){ // get请求
            let p = querystring.parse(urlJson.query);
        }else if(req.method.toUpperCase()=='POST'){  // post 请求的处理
            let str = '';
            req.on('data',(chunk)=>{
                str += chunk;
            })
            req.on('end',()=>{
                log('str--->',str); // 这才是传过来的数据
                let p = querystring.parse(str);  // 然后再进行转成对象
            })
        }

    }
    // let page = path +'/err.html';
    // getHtml(page,req,res);
});


server.listen(3000,'localhost',()=>{
    log('监听中...');
});

const getHtml = (filename,req,res) => {   
    fs.readFile(filename,(err,data)=>{
        if(!err){
            res.writeHead(200,'describe status',{'content-type':'text/html;charset=utf-8'});
            res.end(data);
        }else{
            res.writeHead(404,'describe status',{'content-type':'text/plain;charset=utf-8'});
            res.end('没找到');
        }
    });
}
*/

// 8. get 和 post 请求，对数据的处理
//   post 发送的数据会被写入缓存区，需要通过request参数对象中的on方法监听，data和end事件来进行数据拼接处理















