// 1.创建应用,监听端口

// 2.路由绑定
// app.get('url',(req,res,next)=>{});
// app.post('url',(req,res,next)=>{});
//    req: =》 类似原生request事件中，回调的req参数  
//    res: =》 类似原生request事件中，回调的res参数
//    next: => 用于执行下一个和路径匹配的函数  

// 3.内容输出,发送内容到客户端  
//   res.send('data');    

// 4.模版的使用: 后端逻辑和页面表现分离 -- 前后端分离  
//    1). let swig = require('swig'); // 加载模版引擎处理模块    
//    2). app.engine('html',swig.renderFile); // 定制模版引擎，使用swig.renderFile方法解析后缀为html的文件
//    3). app.set('views','./views'); // 设置模板存放目录，第一个参数为views不可更改，第二个参数为路径
//    4). app.set('view engine','html'); // 注册模板引擎，第一个参数不可变，第二个参数为模板类型，同app.set('html',swig.renderFile);第一个参数一致
//    5). swig.setDefaults({cache:false}); // 开发模式下，不要缓存模板（默认为true缓存）

// 5.res.render('',{});  // 读取views目录下指定的模板，解析并返回给客户端
//  第一个参数为相对于设定目录的指定文件，第二个参数为传输给模板的数据

// 6.app.use('/public',express.static(`${__dirname}/public/`)); 使用app.use()中间件进行文件托管，遇到有以/public/路径开始的请求，就去${__dirname}/public/
//    文件下查找文件并返回

// 7.express.static() 中间件，用于处理静态文件

// 8.app.use('/',require('./..')); 使用app.use()来进行分模块开发 let router = express.Router(); 

// 9.连接数据库，下载mongodb数据库,可视化连接界面robomongo，使用mongoose将项目与数据库连接

// 10.const bodyParser = require('body-parser'); 中间件，用来给req对象添加body，处理客户端post传过来的信息
//    app.use(bodyParser.urlencoded({extended:true})); // post传过来的数据都加密过，使用此中间件可解密并转成 json

// 11.const Cookies = require('cookies'); 中间件，用来处理cookie   




// 加载express模块
const express = require('express');
// 创建web服务器
const app = express(); // => http.createSever();

app.use('/public',express.static(`${ __dirname }/public/`));

app.engine('html',swig.renderFile);

app.set('views','./views');

app.set('view engine','html');  

app.get('/',(req,res,next)=>{
    res.render('index');
});

swig.setDefaults({cache:false});

// 监听http请求
app.listen(3000);









