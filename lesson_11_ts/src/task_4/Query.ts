import IQuery from "./IQuery.js";

export default class Query implements IQuery {
  constructor(
    public selectFields: string[] = [],
    public tableName: string = "",
    public whereClauses: string[] = [],
    public orderByClause: string = "",
    public limitClause: number | null = null
  ) {}
  //---
  toSQL(): string {
    const queryParts: string[] = [];
    let fields: string;

    if (this.selectFields.length > 0) {
      fields = this.selectFields.join(", ");
    } else {
      fields = "*";
    }

    queryParts.push(`SELECT ${fields}`);
    queryParts.push(`FROM ${this.tableName}`);

    if (this.whereClauses.length > 0) {
      queryParts.push(`WHERE ${this.whereClauses.join(" AND ")}`);
    }

    if (this.orderByClause) {
      queryParts.push(`ORDER BY ${this.orderByClause}`);
    }

    if (this.limitClause !== null) {
      queryParts.push(`LIMIT ${this.limitClause}`);
    }
    return queryParts.join(" ");
  }
}
