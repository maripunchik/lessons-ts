export default interface IHttpRequest {
  send(): Promise<string>;
}
