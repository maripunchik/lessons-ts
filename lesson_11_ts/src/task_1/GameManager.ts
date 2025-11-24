
import ISettings from "./ISettings.js";
import { GameConfig } from "./types.js";

export default class GameManager implements ISettings<GameConfig> {
  private static _instance: GameManager

  public currentLever: number;
  public numberOfPoints: number;
  public playersLife: number;
  public extraSettings?: GameConfig;

  private constructor() {
	this.currentLever=1
	this.numberOfPoints=0
	this.playersLife=3
	this.extraSettings={
		difficulty:"medium",
		bonusLives:1
	}
  }
  //---
  public static getInstance():GameManager{
	if(!GameManager._instance){
		GameManager._instance=new GameManager
	}
	return GameManager._instance
  }
  //---
  public addPoints(points:number):void{
	this.numberOfPoints += points
  }
  //---
  public loseLife():void {
	if(this.playersLife>0){
		this.playersLife--
	}
  }
  //---
  public nextLife():void {
	this.currentLever++
  }
}