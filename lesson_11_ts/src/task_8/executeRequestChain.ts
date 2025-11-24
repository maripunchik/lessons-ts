import HttpRequest from "./base/HttpRequest.js";
import AuthDecorator from "./decorators/AuthDecorator.js";
import CacheDecorator from "./decorators/CacheDecorator.js";
import LoggerDecorator from "./decorators/LoggerDecorator.js";

export default async function executeRequestChain() {
  const baseRequest = new HttpRequest(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const authRequest = new AuthDecorator(baseRequest, "my-secret-jwt");
  const cachedDRequest = new CacheDecorator(authRequest, "todo-1");
  const loggedRequest = new LoggerDecorator(cachedDRequest);

  const result = await loggedRequest.send();
  console.log("Response:", result);

  const result2 = await loggedRequest.send();
  console.log("Responce(cached):", result2);
}
