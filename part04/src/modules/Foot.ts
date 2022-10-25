/*
 * @Author: Topskys
 * @Date: 2022-10-23 22:56:13
 * @LastEditTime: 2022-10-23 22:57:26
 */
/**
 * 食物类（对象）Food
 */
class Food {

    element: HTMLElement;// 定义属性表示食物的元素

    // 构造函数，初始化属性
    constructor() {
        this.element = document.getElementById("food")!; // x!：会报错，可能获取不到元素，加!表示没问题
    }

    // 获取食物X轴的坐标方法
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物Y轴的坐标方法
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    changePosition() {
        // 生成随机坐标 [0,290]，snake移动一次是10px，故食物随机间隔为10px
        let top = Math.round(Math.random() * 29) * 10; // 四守五入
        let left = Math.floor(Math.random() * 30) * 10; // 向下取整
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food
