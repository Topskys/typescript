/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:20:19
 * @LastEditTime: 2022-10-10 10:45:21
 */
(function () {

    /**
     * 描述一个对象属性的类型，不可重复声明
     */
    type objType = { name: string, age: number }

    /**
     * 接口，用来定义一个类结构，应该包含哪些属性和方法
     */
    interface itf {
        name: string;
        age: number;
    }

    /**
     * 接口，用于限制类的解构，可重复声明，
     * 所有属性都不能有实际的值，
     * 所有的方法都是抽象方法。
     */
    interface itf {
        gender: string;
        sayHi(): void;
    }

    // const obj: itf = { name: 'T', age: 10, gender: 'male' };

    /**
     * 实现接口，需满足接口得要求，编译后会只剩该类
     */
    class impItf implements itf {
        name: string;
        age: number;
        gender: string;

        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        sayHi(): void {
            console.log('Hi')
        }
    }
})()
