const { log } = console;
const fs = require('fs'); // node 核心模块 之 fs  
// file system (文件系统)  操作系统中的文件或者文件夹  

/** 1.fs.open()  异步打开文件
   --fs.open(path,flags,[mode],callback)      ==>  异步打开文件        
   --path : 要打开的文件路径       
   --flags : 打开文件的方式   读/写 -->    r/r+
   --mode : 设置文件的模式  读/写/执行-->4/2/1  
   --callback : 回调           
        err : 文件打开失败的错误保存在err里面,如果成功err为null    
        fd : 被打开文件的标识    
 */

// fs.open('./1.txt','r',(err,fd)=>{
//    if(err){
//         log('读取失败');
//         return
//    }
//    log('读取成功,fd =',fd);
// });

// 2. fs.openSync() 同步打开文件
// --fs.openSync(path,flags,[mode]) ==> 同步打开文件    

// let fd = fs.openSync('./1.txt','r');
// console.log(fd);

// 3.fs.read() 异步读取
/**
 * --fs.read( fd,buffer,offset,length,position,function( err,len,newBuffer){} )           
    --fd : 通过open方法成功打开文件后返回的文件编号
    --buffer : buffer对象
    --offset : 写入buffer偏移的位置
    --length : 写入buffer的文件内容的长度
    --position : 要写入的文件内容的开始位置
    --callback : err:错误，len : 返回buffer的长度;  newBuffer: 返回的buffer对象
 */

// fs.open('./1.txt','r',(err,fd)=>{
//     if(err){
//         log('文件打开失败');
//         return
//     }
//     let bf = Buffer.alloc(10);
//     log(bf);
//     fs.read(fd,bf,0,7,null,(err,length,newBf)=>{
//         log(bf);
//         log(length);
//         log(newBf);
//         log(newBf.toString());
//     });
// });

// 4. fs.readSync(要打开的文件表示号,buffer容器,buffer容器偏移量,buffer容器允许写入长度,文件内容开始位置) 同步读取
//  返回读取的字节长度
    // fs.open('./1.txt','r',(err,fd)=>{
    //     if(err){
    //         log('读取失败');
    //         return
    //     }
    //     let bf = Buffer.alloc(10);
    //     let len = fs.readSync(fd,bf,0,7,null);
    //     log(len);
    // })

// 5. fs.write(); 异步写入文件
/**
 *  fs.wirte(打开的文件标示号,要写入的buffer,要写入buffer的偏移量,要写入buffer的长度,被写入文件位置,(err,写入的长度,写入的buffer)=>{});
 *  fs.write(打开的文件标示号,'直接写入字符串',被写入文件位置,'utf-8',()=>{});
 */
    // fs.open('./1.txt','r+',(err,fd)=>{
    //     if(err) return
    //     let bf = Buffer.alloc(10,'helloworld');
    //     fs.write(fd,bf,0,10,8,( err,len,bfIn )=>{
    //         // log(err);
    //         // log(len);
    //         // log(bfIn);
    //         fs.close(fd,()=>{
    //             log('文件已关闭');
    //             log('fd--->',fd);
    //         });
    //     });
        
        // fs.write(fd,'helloworld',8,'utf-8',(err,len,bfIn)=>{
        //     log(err);
        //     log(len);
        //     log(bfIn);
        // });
    // }); 

// 6.fs.writeSync() 同步写入,返回写入内容的字节长度
    // fs.open('./1.txt','r+',(err,fd)=>{
    //     if( err ) return
    //     let bf = Buffer.alloc(10,'hellowolrd');
    //     let t = fs.writeSync(fd,bf,0,10,8);
    //     log('t--->',t);
    // })
// 7. fs.close(); fs.closeSync() 操作完后关闭文件
// 4个
// -------------------以上都属于底层的，以下更好用--------------------

// 1. fs.writeFile(filename,data,(err)=>{})); 异步将数据写入一个文件，文件不存在则新建文件然后写入，文件存在则覆盖原文件内容；
//    fs.writeFileSync(filename,data); 同步将数据写入一个文件，没有返回值  

// 2.fs.appendFile(filename,data,(err)=>{}); 异步的将数据添加到一个文件的尾部，如果不存在则新建文件然后写入，文件存在则将数据追加到后面；
//    fs.appendFileSync(filename,data); 同步将数据添加到一个文件的尾部，没有返回值；

// 3.fs.exists(filename,(exist)=>{});异步判断一个文件或文件夹是否存在
//   fs.existsSync(filename); 同步判断一个文件或文件夹是否存在，返回true or false
    
    // let filename = './2.txt';
    // fs.exists(filename,(exists)=>{
    //     if(!exists){
    //         fs.writeFile(filename,'hello world',(err)=>{
    //             log('err--->',err);
    //         })
    //     }else{
    //         fs.appendFile(filename,'-hi',(err)=>{
    //             log('err--->',err);
    //         })
    //     }
    // })

    // let filename = './2.txt';
    // if(!fs.existsSync(filename)){
    //     fs.writeFileSync(filename,'hello world')
    // }else{
    //     fs.appendFileSync(filename,' -hi');
    // }

// 4.fs.readFile(filename,(err,bufferData)=>{});异步读取一个文件的内容
//   fs.readFileSync(filename); 同步读取一个文件的内容，返回读取的内容buffer
   /*  let filename = './2.txt';
    fs.readFile(filename,(err,bufferData)=>{
        log(bufferData.toString());
    });
    let b = fs.readFileSync(filename);
    log(b.toString()); */

// 5. fs.unlink(filename,(err)=>{}); 异步删除一个文件
//    fs.unlinkSync(filename); 同步删除一个文件,没有返回值

  /*let filename = './1.txt';
    fs.unlink(filename,function(err){
        log(err);
    });
    fs.unlinkSync(filename); */

// 6.fs.rename(filename,'new name',(err)=>{}); 异步重命名文件
//   fs.renameSync(filename,'new name'); 同步重命名文件,没有返回值

/*  let filename = './1.new.txt';
    fs.rename(filename,'1.new.txt',(err)=>{
        log(err); // null 成功返回null
    });
    let f = fs.renameSync(filename,'1.txt')
    log(f); */

// 7.fs.stat(filename,(err,info)=>{}); 异步读取文件信息
//   const f = fs.statSync(filename); 同步读取文件信息,返回文件信息; f.isDirectory() 是否是文件夹,返回true or false

   /*  let filename = './1.txt';
    fs.stat(filename,function(err,info){
        log(arguments);
    })
    let f = fs.statSync(filename);
    log(f); */

// 8.fs.watch(filename,(event,filename)=>{}); 检测指定文件或目录的改变，event = change 或是 rename;回调的第二个参数不是100%提供

    /* let filename = './1.txt';
    fs.watch(filename,(event,filename)=>{
        if(filename){
            log(filename+' '+event);
        }else{
            log('no filename');
        }
    }); */

// 以下 3 条是对文件夹的操作  
// 9. fs.mkdir(filename,(err)=>{}); 异步创建一个文件夹
//    fs.mkdirSync(filename); 同步创建一个文件夹

  /*  fs.mkdir('new',(err)=>{
        log(err);
    });
    fs.mkdirSync('new1') */

// 10. fs.rmdir(filename,(err)=>{});  异步删除一个文件夹
//     fs.rmdirSync(filename); 同步删除一个文件夹

      /*  fs.rmdir('new',(err)=>{
           log(err)
       }) */

// 11. fs.readdir(filename,(err,filelist)=>{}); 异步读取一个文件夹
//     fs.readdirSync(filename); 同步读取一个文件夹

       fs.readdir('../node-peep',(err,filelist)=>{
          console.log(filelist);
            filelist.forEach(item=>{
                fs.stat(item,(err,info)=>{ // 16877,33188
                    if( info.mode == 16877 ){
                        log(item + '  文件夹' );
                    }else if(info.mode == 33188){
                        log(item + '  文件' );
                    }else{
                        log(item + '  其他类型文件');
                    }
                });
            });
       }); 

// 12.fs.createReadStream(); fs.createWriteStream()
    // let ori = fs.createReadStream('./1.jpg');
    // let newImg = fs.createWriteStream('./2.jpg');
    // ori.pipe(newImg);
<<<<<<< HEAD
=======

// 13.path模块,用来处理文件路径
// path.resolve(); 返回当前文件所在目录,path.resolve(__dirname,'../public/index.css'); ..表示返回上一级
// path.join('',''); 拼接路径

// 13个
>>>>>>> 7fbe72b5f707ba5474dbe42e50683ae7a3f20688

// 13.path模块,用来处理文件路径
const path = require('path');
// path.resolve(); 返回当前文件所在目录,path.resolve(__dirname,'../public/index.css'); ..表示返回上一级
// path.join('',''); 拼接路径    

// 13个  











