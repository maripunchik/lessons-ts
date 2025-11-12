
export default interface ITransformer<T, U> {
transform(value: T): U
}