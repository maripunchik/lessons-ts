import IHttpRequest from "../base/IHttpRequest.js";

export default class LoggerDecorator implements IHttpRequest {
  constructor(private request: IHttpRequest) {}

  async send(): Promise<string> {
    console.log(`Sending request...`);
    const start = Date.now();

    const response = await this.request.send();

    const duration = Date.now() - start;
    console.log(`Request completed in ${duration}ms`);
    return response;
  }
}
