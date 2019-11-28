const Router = require('koa-router');
const fs = require('fs.promised');
const route = new Router();
const url = require('url');

<<<<<<< HEAD
route.get('/login',(ctx,next)=>{  
    console.log(ctx.request);  
    console.log('url-->',url.parse(ctx.request.url));  
    cxt.response.body = 'test route';  
=======
route.get('/login',(ctx,next)=>{
    console.log(ctx.request);
    console.log('url-->',url.parse(ctx.request.url));
    cxt.response.body = 'test route';
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688
});
route.post('/upload/avatar',async ctx=>{
    const files = ctx.request.files || {};
    const exist = await fs.exists('./img');
    console.log('exist->',exist);
    if(!exist){
        await fs.mkdir('./img');
        for(let key in files){
            console.log('path->',files[key].path);
            const r = fs.createReadStream(files[key].path);
            const w = fs.createWriteStream(`./img/${ files[key].name }`);
            r.pipe(w);
        }
        ctx.response.body = '上传成功';
        return 
    }
});

module.exports = route; 

