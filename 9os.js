const os = require('os');  // 操作系统
// os.totalmem() 返回系统总内存
// os.freemem()  返回系统空闲内存
const rate = 100 - os.freemem() / os.totalmem();  // 内存使用情况

console.log(`内存占用率为${ rate.toFixed(3) }%`);








