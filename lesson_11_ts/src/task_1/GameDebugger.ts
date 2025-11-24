import ISettings from "./ISettings.js";
import { GameConfig } from "./types.js";

export default class GameDebugger {
	static logState(game:ISettings<GameConfig>) {
		console.log({
			level:game.currentLever,
			points:game.numberOfPoints,
			life:game.playersLife,
			settings:game.extraSettings
		});
		
	}
}