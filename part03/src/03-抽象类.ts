/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:21:24
 * @LastEditTime: 2022-10-10 10:25:08
 */
/**
 * 抽象类
 */
(function () {

    /**
     * 抽象类，以abstract开头修饰，专门用于子类继承的类，不能创建对象实例，可添加抽象方法
     */
    abstract class Parent {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        /**
         * 抽象方法，以abstract开头修饰，没有方法体，子类必须对象父类抽象方法进行重写
         */
        abstract bark(): void;
    }

    class Child extends Parent {
        // 默认继承父类构造函数，故实例化需传参
        // 重写实现父类的方法
        bark() {
            console.log("Child")
        }
    }

    const child = new Child("子类")
    child.bark()
    console.log(child)
})()