/*
 * @Author: Topskys
 * @Date: 2022-10-23 23:14:51
 * @LastEditTime: 2022-10-25 14:41:59
 */
import Food from './Foot';
import ScorePanel from './ScorePanel';
import Snake from './Snake';


/**
 * 游戏控制器
 */
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = 'Right';// 蛇的方向
    isLive: boolean = true;// 是否存活

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏初始化后立即执行
    init() {
        // 绑定键盘按钮按下的事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));// 修改this指向，否则指向document
        this.move();
    }

    // 键盘按下响应方法
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key // 不同浏览器响应符不同
    }

    // 蛇移动的方法
    move() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        this.checkEat(X, Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e: any) {
            alert(e.message + '  GAME OVER');
            this.isLive = false;
        }
        // 开启定时器
        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.changePosition();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}


export default GameControl