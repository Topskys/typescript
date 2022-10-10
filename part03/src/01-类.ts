/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:20:52
 * @LastEditTime: 2022-10-10 10:23:01
 */
/**
 * 类
 * 对象的模型，类的定义
 */
class Person {

    /**
     * 静态属性且只读
     */
    static readonly nickname: string = 'Topskys'
    age: number = 18;
    readonly gender: string = '男';

    /**
     * 定义方法
     * 方法前有修饰static、等关键词，则该方法为类Person方法，否则为实例per的方法
     */
    static sayHi(): string {
        return "Hi TypeScript"
    }

}

// 类实例调用，有new 类名后可不加括号
const per = new Person()
// 静态属性或方法，需通过 类名.属性 访问，而非实例per调用
console.log(per, per.age, Person.nickname, Person.sayHi())
// 修改
per.age = 20;
console.log(per)



class Dog {
    name: string;
    age: number;

    /**
     * 构造函数，对象实例创建时调用
     * 在实例方法，this表示当前的对象实例，通过this向新建的对象实例添加属性及值
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
        console.log(this.name)
    }

    bark() {
        alert("狗叫")
    }
}

// 对象实例
const dog1 = new Dog('小黄', 8);
const dog2 = new Dog('小黑', 3);
dog1.bark()
dog2.bark()