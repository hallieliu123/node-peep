const { log } = console;

// 全局对象 process: 提供了对当前运行程序进程访问和控制的属性和方法

/** 1.
 *  --1).process.argv : 一个包含命令行参数的数组,第一个元素是'node',第二个运行的是‘js’文件名称,接下来的参数依次是命令行传入的参数            
    --2).process.execPath : 开启当前程序进程的程序的绝对路径node;       
    --3).process.env : 返回用户环境信息;            
    --4).process.version : 返回node版本信息            
    --5).process.versions : 返回node以及node依赖包的版本信息            
    --6).process.pid : 当前进程的pid            
    --7).process.title : 返回当前进程的显示名称（Getter/Setter）            
    --8).process.arch : 返回当前CPU处理器架构 arm/ia32/x64            
    --9).process.platform : 返回当前操作系统平台            
    --10).process.cwd() : 返回当前进程的工作目录            
    --11).process.chdir() : 改变当前进程的工作目录            
    --12).process.memoryUsage() : 返回node的进程内存使用情况，单位byte（B）     
    --13).process.exit(0) : 退出进程  : 默认0代表成功,1代表失败，或者使用 process.exitCode 正常退出状态码  
    --14).process.kill(pid) : 向进程发送信息    
 */

// log( process.argv );
// log( process.execPath );
// log( process.env );
// log( process.version );
// log( process.versions );
// log( process.pid );
// process.title = 'process';
// log( 'title->',process.title );
// log( process.arch );
// log( process.platform );
log( process.cwd() );
// log( __dirname )
// log( process.chdir('../schedule') );
// log( process.memoryUsage() );
// log('hi')
// process.exit()
// log('hello');

// log(process.pid)
// process.kill( process.pid ); 
// log('hello');

// 2.stdin/stdout : 标准输入输出流 （I/O）
/**
 *  --stdin / stdout : 提供了操作输入数据和输出数据的方法，我们也通常称为I/O操作。
    --process.stdout.write( '123' );　
    --process.stdin.on('data',function(){}) : 用于监听用户的输入数据
    --默认情况下输入流是关闭的，要监听处理输入流，首先要开启输入流 ：process.stdin.resume();　
 */
 /* var a,b;
 process.stdin.resume();
 process.stdout.write('请输入a的值：');
 process.stdin.on('data',(chunk)=>{
    if(!a){
        a = Number(chunk);
        process.stdout.write('请输入b的值： ');
    }else{
        b = Number(chunk);
        process.stdout.write('结果是：' + (a + b));
    }
 }); */

































