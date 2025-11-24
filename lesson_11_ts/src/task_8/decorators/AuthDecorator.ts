import IHttpRequest from "../base/IHttpRequest.js";

export default class AuthDecorator implements IHttpRequest {
  constructor(private request: IHttpRequest, private token: string) {}
  async send(): Promise<string> {
    console.log(`Adding Authorization header: Bearer ${this.token}`);
    return this.request.send();
  }
}
