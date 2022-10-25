/*
 * @Author: Topskys
 * @Date: 2022-10-23 22:59:33
 * @LastEditTime: 2022-10-25 15:04:40
 */
/**
 * 蛇
 */
class Snake {

    headEle: HTMLElement;// 蛇头元素
    bodiesEle: HTMLCollection;// 获取蛇身，实时刷新
    element: HTMLElement;// 蛇容器

    constructor() {
        this.element = document.getElementById("snake")!;
        this.headEle = document.querySelector("#snake > div") as HTMLElement;
        this.bodiesEle = this.element.getElementsByTagName("div");
    }

    // 获取蛇的坐标（蛇头坐标）
    get X() {
        return this.headEle.offsetLeft;
    }

    get Y() {
        return this.headEle.offsetTop;
    }

    set X(value: number) {
        if (this.X === value) return; // 新旧值相等不再修改
        if (value < 0 || value > 290) throw new Error("蛇撞墙了");

        // 调头
        if (this.bodiesEle[1] && (this.bodiesEle[1] as HTMLElement).offsetLeft === value) {
            // 禁止水平调头
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody();
        this.headEle.style.left = value + 'px';
        this.headAtBody();
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) throw new Error("撞墙");

        if (this.bodiesEle[1] && (this.bodiesEle[1] as HTMLElement).offsetTop === value) {
            // 禁止垂直调头
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody();
        this.headEle.style.top = value + 'px';
        this.headAtBody();
    }

    // 增加蛇身体的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>"); // 插入一个div
    }

    // 蛇身移动方法
    moveBody() {
        for (let i = this.bodiesEle.length - 1; i > 0; i--) {
            let X = (this.bodiesEle[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodiesEle[i - 1] as HTMLElement).offsetTop;
            (this.bodiesEle[i] as HTMLElement).style.left = X + 'px';
            (this.bodiesEle[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 蛇头撞到蛇身
    headAtBody() {
        for (let i = 1; i < this.bodiesEle.length; i++) {
            let bd = this.bodiesEle[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) throw new Error("蛇头撞到蛇身")
        }
    }
}


export default Snake