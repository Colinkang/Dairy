ES5 var function 声明命令

let命令
只在块级作用域里有效  for循环
不存在变量提升
不允许重复声明

const命令
用来声明常量
只在声明所在的块级作用域里有效
复合型变量，变量名不指向数据，而是指向数据所在的地址，const命令只能保证变量名指向的地址不变，并不能保证该地址的数据不变。
将对象冻结 const foo = Object.freeze({}); 赋值则不起作用

跨模块常量
constants.js 模块
export const A=1;
export const B=2;
export const C=3;
//test1.js
import * as constants from './constants';
console.log(constants.A);
console.log(constants.B);
//test2.js
import {A,B} from './constants';
console.log(constants.A);
console.log(constants.B);
