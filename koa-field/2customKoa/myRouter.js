// 1. route.routes() 返回路由中间件，作用：匹配路由
// 2. route.get/post('',(ctx,next)=>{}); 插入路由栈

class MyRouter{
    constructor(){
        console.log('1');
        this.stack = [];
    }
    register(path,method,middleware){
        this.stack.push({path,method,middleware});
    }
    get(path,middleware){
        this.register(path,'GET',middleware);
    }
    post(path,middleware){
        this.register(path,'POST',middleware);;
    }
    routes(){
        const stack = this.stack;
        return async function(ctx,next){
            var fn;
            for(let i=0;i<stack.length;i++){
                if(stack[i].path == ctx.url && stack[i].method == ctx.method){
                    fn = stack[i].middleware;
                    break;
                }
            }
            if( typeof fn == 'function'){
                fn(ctx,next);
                return; 
            }
            await next();
        }
    }
}

module.exports = MyRouter;




