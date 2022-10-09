/*
 * @Author: Topskys
 * @Date: 2022-10-08 23:40:14
 * @LastEditTime: 2022-10-09 11:01:42
 * ts基本数据类型(12)：number、string、boolean、字面量、any、unknown、void、never、object、array、tuple、enum
 */
// 变量声明类型
let a: number;
a = 10;

// 变量声明直接赋值
let b: string = 'hello world';

// 如果变量声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = true;
c = false;

// 字面量，类似const，可使用|&
let d: 10
d = 10


// unknown，实际是一个安全类型的any，但不能直接赋值给其他变量
let e: unknown
e = 'hello'
let r: string
// r=e // 报错，需要对unknown判断或断言
// 对unknown判断
if (typeof e === 'string') {
    r = e
}
// 断言
r = e as string
r = <string>e


// ts函数
function sum1(a: number, b: number): number {
    return a + b;
}
sum1(10, 5)

// void，空值
function fn1(): void {
    return undefined;
}

// never
function fn2(): never {
    throw new Error('never return a result')
}



// object
let f: object
//or
let g = {}
// ?：可选属性
let h: { name: string, age?: number }
h = { name: 'T' }
// [propName:string]:any：任意属性，任意类型，propName：任意字符，[xxx:string]:any
let i: { name: string, age?: number, [propName: string]: any }
i = { name: "T", age: 18, gender: 0, class: "初级" }


// 定义函数解构的类型声明
// 语法：(形参:类型,...)=>返回值类型
let j: (a: number, b: number) => number;
j = function (a: number, b: number): number {
    return a * b
}


// array
let k: (string | number)[]
k = ['t47', 4]
let l: Array<string | number>



// 元组，固定长度的数组
// 语法：[类型,类型,类型]
let m: [string, number, boolean?]
m = ['t47', 8, true]


// enum，枚举，把每一种可能的情况都列举出来
// let n: { name: string, age?: number, gender: 0 | 1 }
// n = { name: 'T', gender: 1 }
enum Gender {
    Male = 0,
    Female = 1,
}
let n: { name: string, gender: Gender }
n = { name: 'T', gender: Gender.Male }
console.log(n.gender === Gender.Male) // true


// &，且
let p: { name: string } & { age: number }
p = { name: 'T', age: 18 }


// 类型别名
// let q: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type myString = string
let q: myString;
q = '10'

