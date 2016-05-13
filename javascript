异步编程的方式
回调函数
promise 都采用异步调用方式

使用return将值传递给下一个then回调函数中的参数

每次调用then都会返回一个promise对象

Promise.all的promise并不是一个个顺序执行的，而是同时开始并行执行的(对数组进行处理)
Promise.race


**JavaScript的作用域完全是由函数来决定的，if，for语句中花括号不是独立的作用域。**
**闭包严格定义是“在函数(环境)及其封闭的自由变量组成的集合体”**
*闭包：当一个函数返回它内部定义的一个函数时，就产生了一个闭包，闭包不但包括被返回的函数，还包括这个函数的定义环境。*
**JavaScript是面向对象的语言。JavaScript只有对象，对象就是对象，不是类的实例**
**call和apply的功能是以不同的对象作为上下文来调用某个函数。简而言之，就是允许一个对象去调用另一个对象的成员函数**
*call以参数表来接收被调用函数的参数，而apply以数组来接受被调用函数的参数*
*func.call(thisArg[,arg1,arg2])*
*func.apply(thisArg[,argsArray])*

*func.bind(thisArg[,arg1,arg2])*
