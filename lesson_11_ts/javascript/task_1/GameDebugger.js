export default class GameDebugger {
    static logState(game) {
        console.log({
            level: game.currentLever,
            points: game.numberOfPoints,
            life: game.playersLife,
            settings: game.extraSettings
        });
    }
}
