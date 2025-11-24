export default interface ISettings<T = unknown> {
  currentLever: number;
  numberOfPoints: number;
  playersLife: number;
  extraSettings?: T;
}
