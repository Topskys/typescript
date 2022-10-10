/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:21:09
 * @LastEditTime: 2022-10-10 10:24:39
 */
/**
 * 继承
 * 立即执行函数
 */
(function () {

    /**
     * 定义一个公共类，父类
     */
    class Animal {
        name: string;
        age: number;
        cry: string;

        constructor(name: string, age: number, cry: string) {
            this.name = name;
            this.age = age;
            this.cry = cry;
        }

        bark() {
            console.log(this.cry)
        }
    }

    /**
     * 子类继承父类，子类将拥有父类的所有属性与方法，除非父类作限制
     */
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`)
        }
    }

    class Cat extends Animal {
        gender: string;

        /**
         * 如果在子类中重写了构造函数，必须在子类构造函数中继承父类构造函数并传值
         */
        constructor(name: string, age: number, cry: string, gender: string) {
            super(name, age, cry);// 调用父类的构造函数
            this.gender = gender
        }

        /**
         * 方法重写，子类定义跟父类一样的方法，在子类里就会覆盖继承的方法(优先使用自己的方法)，或通过super(父)区分
         */
        bark() {
            console.log("猫叫哦，子类方法")
            // 调用继承的方法
            super.bark()
        }
    }

    const dog = new Dog('大狗', 8, "旺旺");
    const cat = new Cat('猫', 3, "喵喵", '男');
    dog.run();
    cat.bark()

})()
