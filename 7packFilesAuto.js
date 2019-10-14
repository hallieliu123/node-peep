const { log } = console;
const fs = require('fs');
// 利用watch监听文件夹，自动打包多个文件

let dir = './app/source';
fs.watch(dir,(event,filename)=>{  // 监听文件
    fs.readdir(dir,(err,list)=>{   // 有变动即去读文件夹
        let content = '';     // 所有文件内容
        list.forEach(item=>{
            log(list);
            let info = fs.statSync(`${dir}/${item}`);
            if(info.mode == 33188){ // 文件
                let temp = fs.readFileSync(`${dir}/${item}`).toString();
                content += temp;               
            }else if(info.mode == 16877){  // 文件夹，可以递归

            }else{

            }
        });
        fs.writeFileSync('./app/js/index.js',content);
    })
});



























