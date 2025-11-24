import IHttpRequest from "../base/IHttpRequest.js";

export default class CacheDecorator implements IHttpRequest {
  private static cache: Map<string, string> = new Map();

  constructor(private request: IHttpRequest, private key: string) {}
  async send(): Promise<string> {
    const cached = CacheDecorator.cache.get(this.key);
    if (cached !== undefined) {
      console.log(`Returning cached response for key: ${this.key}`);
      return cached;
    }

    const response = await this.request.send();
    CacheDecorator.cache.set(this.key, response);
    console.log(`Cached response for key: ${this.key}`);
    return response;
  }
}
