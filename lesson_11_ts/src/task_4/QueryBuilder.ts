import Query from "./Query.js";
import { SortDirection } from "./types.js";

export default class QueryBuilder {
  private query = new Query();
  //---
  select(...fields: string[]) {
    this.query.selectFields = fields;
    return this;
  }
  //---
  from(table: string) {
    this.query.tableName = table;
    return this;
  }
  //---
  where(condition: string) {
    this.query.whereClauses.push(condition);
    return this;
  }
  //---
  orderBy(field: string, direction: SortDirection = "ASC") {
    this.query.orderByClause = `${field} ${direction}`;
    return this;
  }
  //---
  limit(count: number) {
    this.query.limitClause = count;
    return this;
  }
  //---
  build(): Query {
    return this.query;
  }
}
