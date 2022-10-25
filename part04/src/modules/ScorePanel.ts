/*
 * @Author: Topskys
 * @Date: 2022-10-23 22:56:38
 * @LastEditTime: 2022-10-25 13:52:12
 */
/**
 * 记分牌类
 */
class ScorePanel {

    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        this.score % this.upScore === 0 && this.levelUp()
    }

    levelUp() {
        this.level < this.maxLevel && (this.levelEle.innerHTML = ++this.level + '')
    }
}


export default ScorePanel