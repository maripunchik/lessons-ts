import IHttpRequest from "./IHttpRequest.js";

export default class HttpRequest implements IHttpRequest {
  constructor(private url: string) {}
  async send(): Promise<string> {
    const res = await fetch(this.url, {
      method: "GET",
    });
    return res.text();
  }
}
