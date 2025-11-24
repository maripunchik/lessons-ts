export default class GameManager {
    constructor() {
        this.currentLever = 1;
        this.numberOfPoints = 0;
        this.playersLife = 3;
        this.extraSettings = {
            difficulty: "medium",
            bonusLives: 1
        };
    }
    //---
    static getInstance() {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager;
        }
        return GameManager._instance;
    }
    //---
    addPoints(points) {
        this.numberOfPoints += points;
    }
    //---
    loseLife() {
        if (this.playersLife > 0) {
            this.playersLife--;
        }
    }
    //---
    nextLife() {
        this.currentLever++;
    }
}
