const { log } = console;
const fs = require('fs');
const path = require('path');
// serve('./public');
// 如果读的是文件
// 如果读的是文件夹

module.exports = ( dir = './public')=>{
    return async function(ctx,next){
        if(ctx.url.indexOf('/public') == 0 ){
            let urlArr = ctx.url.split('/');
            let filename = urlArr[urlArr.length-1];
            
            let filePath = path.resolve(__dirname,`../public/${filename}`);
            const f = fs.statSync(filePath);
            if(f.isDirectory()){
               const filelists = fs.readdirSync(filePath);
               ctx.body = JSON.stringify(filelists);
            }else{
               ctx.body = fs.readFileSync(filePath);
            }
        }else{
            await next();
        }
    }
}



