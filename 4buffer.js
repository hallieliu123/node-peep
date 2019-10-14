const { log } = console;
// buffer 用于操作二进制数据流   
/**
    -- 一个更好的用于操作二进制数据的类 ： 我们在操作文件或者网络数据的时候，其实操作的就是二进制数据流，Node为我们提供了一个更方便的操作这种数据流的类Bffer, Buffer大小在创建是设定，且无法改变。
    -- Buffer.alloc( size,fill,encoding )  
    --Buffer.from(  array  /  string  )  
    --属性、方法：
    --1). bf.length : buffer的字节大小(不是字符，一个中文字符占用3个字节)      
    --2).bf[ index ] : 获取、设定index位置字节内容     
    --3).bf.write(str,buffer偏移量,截取写入的字符串长度,'buffer的编码格式') : 根据参数 offset 的偏移量和指定的encoding，将参数str写入buffer;  
    --4).bf.toString([encoding转成格式编码],[start],[end不包含]) : 根据encoding参数(默认为utf-8),返回一个解码的string类型;    
    --5).bf.toJSON() : 返回一个JSON表示的buffer实例。   
    --6).bf.slice([start],[end]) : 返回一个新的buffer，这个buffer会和原来的buffer引用相同的内存地址，注意：修改这个新的buffer实例slice切片，也会改变原来的buffer。   
    --7).bf.copy(targetBuffer,[targetStart],[sourceStart],[souceEnd]) : 进行buffer的 拷贝       
    --8)遍历，for遍历，也可以用 for...of循环，有buffer.keys(),buffer.values();buffer.entries()方法
    --9).类方法，静态方法：
            Buffer.isEncoding('编码类型')：Buffer是否支持此编码类型,返回 true or false
            Buffer.isBuffer( obj ):obj是否是一个Buffer,返回 true or false
            Buffer.concate(buffer数组，buffer数组字节长度)：返回合成后的一个buffer
            Buffer.byteLength(string,encoding) 返回一个字符串的真实字节长度,默认encoding:utf-8
 */

// alloc(),from(),write(),for,for..of,slice();copy();toString();toJSON();length;bf[index]
// Buffer.isEncoding();Buffer.isBuffer();Buffer.byteLength();

// let bf1 = Buffer.alloc(5);
// log(bf1); 
// let bf2 = Buffer.alloc(5,'hello');
// log(bf2);
// let bf3 = Buffer.alloc(6,'你好','utf-8');
// log(bf3);
// log(bf3.toString('utf-8'));

// let bf4 = Buffer.from('hello');
// log('bf4-->',bf4);
// let bf5 = Buffer.from([1,2,3,4,5]);
// log('bf5-->',bf5);

// let bf6 = Buffer.alloc(5);
// bf6.write('hello',1,4,'utf-8');
// log('bf6-->',bf6);
// log('bf6.toString()-->',bf6.toString());
// let bf7 = Buffer.alloc(5);
// bf7.write([1,2,3,4,5]);// 不能直接写入数组
// log('bf7-->',bf7);

// let bf8 = Buffer.alloc(6,'你好');
// log('bf8--->',bf8);
// log('bf8.toString()--->',bf8.toString());
// log('bf8.toString()--->',bf8.toString('utf-8',0,6)); // 

// let bf9 = Buffer.alloc(5,'world');
// log('bf9-->',bf9);
// for(let i=0;i<bf9.length;i++){  // 也可以用 for...of循环，有buffer.keys(),buffer.values();buffer.entries()方法
//     log('bf9[i].-10进制->',bf9[i].toString());
//     log('bf9[i].-16进制->',bf9[i].toString(16)); // 这里调用的不是buffer的toString()方法了
//     log(String.fromCharCode(bf9[i]));
// }

// let bf10 = Buffer.alloc(5,'world');
// log(bf10.toJSON()); 
// log(typeof bf10.toJSON()); 
// log(bf10.toString());

// let bf11 = Buffer.alloc(5,'hello');
// let bf12 = bf11.slice(0,3);  // 引用内存地址一样
// bf12[0] = 10;
// log(bf11)
// log(bf12)

// let bf13 = Buffer.alloc(5,'hello');
// let bf14 = Buffer.alloc(5);
// bf13.copy(bf14,1,0,5);  // 引用内存地址一样
// bf14[0] = 10;
// log(bf13)
// log(bf14.toString())

// let bf15 = Buffer.alloc(5);
// log(Buffer.isBuffer(bf15));
// log(Buffer.isEncoding('utf-8'));
// log(Buffer.byteLength('world'));

// let bf16 = Buffer.alloc(6,'hello ');
// let bf17 = Buffer.alloc(5,'world');
// let bf18 = Buffer.concat([bf16,bf17]);
// log(bf18);
// log(bf18.toString());



