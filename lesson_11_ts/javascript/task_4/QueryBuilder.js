import Query from "./Query.js";
export default class QueryBuilder {
    constructor() {
        this.query = new Query();
    }
    //---
    select(...fields) {
        this.query.selectFields = fields;
        return this;
    }
    //---
    from(table) {
        this.query.tableName = table;
        return this;
    }
    //---
    where(condition) {
        this.query.whereClauses.push(condition);
        return this;
    }
    //---
    orderBy(field, direction = "ASC") {
        this.query.orderByClause = `${field} ${direction}`;
        return this;
    }
    //---
    limit(count) {
        this.query.limitClause = count;
        return this;
    }
    //---
    build() {
        return this.query;
    }
}
