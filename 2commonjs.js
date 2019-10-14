const { log } = console;
//1. nodojs 中的模块

// -- 一个文件就是一个模块,每个模块都有自己的作用域;        
// --每个模块默认有的属性：
// __filename : 返回当前模块文件被解析过的绝对路径; 在模块作用域内，并非全局。
// __dirname : 返回当前模块文件所在目录被解析后的绝对路径；在模块作用域内，并非全局。

log('__filename--->:',__filename);
log('__dirname--->:',__dirname);

//2. 模块加载系统   require('模块'); (相对路径/绝对路径);
   
// --require(' C:\Users\Administrator\Desktop\nodejs\2nodejs.js');        
// --require('2nodejs.js') ：错误，这样代表加载node的核心模块，或者是node_modules内的模块;        							 					     											
// --require('./2');
// --1.首先按照加载的模块的文件名进行查找                
// --2.如果没有，会在模块名称后加上.js后缀，进行查找                
// --3.如果还没有，则会在文件名称后加上.json后缀，进行查找                
// --4.如果还没有，则会在文件名称后加上.node的后缀，进行查找        
// fileName > .js > .json > .node   

//3. module 和 exports  
// --在一个模块中定义的变量，其作用域范围是当前模块，外部不能够直接访问，如果想在另一个模块访问这个模块的变量，可以： 
// --1.把变量作为global对象一个属性  (不推荐)            
// --2.使用模块对象  module : 保存当前模块的一些信息。在module对象中，有一个子对象:exports，通过exports对象可以把一个模块中的局部变量对象输出，提供对外访问功能。            			   												     -		    
// --3.在模块作用域，还有一个内置的模块对象：exports, 其实：exports === module.exports   

log('module--->   ',module);
log('exports--->   ',exports);




