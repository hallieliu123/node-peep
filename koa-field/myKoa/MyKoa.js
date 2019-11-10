const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
class MyKoa{
    constructor(){
        this.middlewares = [];
    }
    listen(...args){
        const server = http.createServer((req,res)=>{
            const ctx = this.createContext(req,res);
            const fn = this.compose(this.middlewares);
            fn(ctx);
            res.writeHead(200,'',{'content-type':'text/html;charset=utf-8'});
            res.end(ctx.body);
        });
        server.listen(...args);
    }
    use(middleware){
        this.middlewares.push(middleware);
    }
    createContext(req,res){
        const ctx = Object.create(context);         
        ctx.request = Object.create(request);      
        ctx.response = Object.create(response);    

        ctx.req = ctx.request.req = req;
        ctx.res = ctx.request.res = res;  
        return ctx;
    }
    compose(middlewares){ // 不管同步异步都是先进后出的栈结构 (last-in-first-out)
        return function(ctx){
            return dispatch(0);
            function dispatch(i){
                let fn = middlewares[i];  
                if(!fn){  
                    return Promise.resolve();   
                }
                return Promise.resolve(   
                    fn(ctx,function next(){   
                        return dispatch(i+1); // 很关键，要return出下一个函数的执行结果,提示下一个函数执行完了;
                    })
                );
            }
        }
    }
}

module.exports = MyKoa;


