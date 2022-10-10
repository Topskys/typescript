/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:46:16
 * @LastEditTime: 2022-10-10 11:23:12
 */
(function () {
    /**
     * 属性的封装
    * 现在属性在类对象中设置，容易被修改(可任意修改)，非常不安全。
    * 属性修饰符
    * public：修饰的属性可在任意位置访问和修改，默认值。
    * private：私有属性，只能在当前类中访问和修改，外边需要访问或修改可通过该类的方法操作给属性(间接)。 
    * protected：受保护的属性，只能在当前类和子类中访问和修改。
    */
    class Person {

        public _name: string;
        private _age: number;
        protected _gender: string

        constructor(name: string, age: number, gender: string) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }

        // // 外边访问该类属性的方法
        // getName() {
        //     return this._name;
        // }
        // // 外边修改该类属性的方法
        // setName(name: string) {
        //     this._name = name;
        // }

        // getAge() {
        //     return this._age
        // }
        // setAge(age: number) {
        //     // 判断age合法性
        //     if (age > 0) {
        //         this._age = age;
        //     }
        // }

        /**
         * 属性存取器
         * TS提供getter方法，可代替getName()和setName()
         */
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }

        get age() {
            return this._age;
        }
        set age(age) {
            // 判断age合法性
            if (age > 0) {
                this._age = age;
            }
        }

    }

    const per = new Person('小黑', 18, 'male')
    per.name // 调用get name()
    per.name = 'John' // 调用set name()
    // per.gender// protected不能在外边访问与修改
    console.log(per)

    class A {
        num: number;
        private agex: string;
        constructor(num: number, agex: string) {
            this.num = num;
            this.agex = agex
        }
    }

    class B extends A {
        test() {
            console.log(this.num) // public
            // console.log(this.agex) // private，报错
        }
    }

    class C {
        // 属性声明和初始化简化写法
        constructor(public name: string, public age: number) { }
    }
    const c = new C('小白', 18);
    console.log(c)

})()