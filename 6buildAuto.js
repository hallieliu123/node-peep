// 前端项目自动化 -- 自动化构建项目   

const fs = require('fs');
let project = {
    name: 'app',
    projectFile:[
        { name: 'css',type: 'dir' },
        { name: 'images',type: 'dir' },
        { name: 'js',type: 'dir' },
        { name: 'source',type: 'dir' },
        { name: 'index.html',type: 'file',content:"<!DOCTYPE html><html lang='en'><head><title>Document</title></head><body>hello </body></html>"},
    ]
}

fs.mkdir(project.name,(err)=>{
    if(err) return;
    let filelist = project.projectFile;
    if(filelist && Array.isArray(filelist)){   
        filelist.forEach( item => {  
            let path = `./${project.name}/${item.name}`;
            if(item.type == 'dir'){
                fs.mkdirSync(path)
            }else if(item.type == 'file'){
                fs.writeFileSync(path,item.content);
            }
        })
    }
});






