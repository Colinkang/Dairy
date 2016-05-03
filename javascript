异步编程的方式
回调函数
promise 都采用异步调用方式

使用return将值传递给下一个then回调函数中的参数

每次调用then都会返回一个promise对象

Promise.all的promise并不是一个个顺序执行的，而是同时开始并行执行的(对数组进行处理)
Promise.race
