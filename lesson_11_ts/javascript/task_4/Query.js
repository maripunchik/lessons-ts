export default class Query {
    constructor(selectFields = [], tableName = "", whereClauses = [], orderByClause = "", limitClause = null) {
        this.selectFields = selectFields;
        this.tableName = tableName;
        this.whereClauses = whereClauses;
        this.orderByClause = orderByClause;
        this.limitClause = limitClause;
    }
    //---
    toSQL() {
        const queryParts = [];
        let fields;
        if (this.selectFields.length > 0) {
            fields = this.selectFields.join(", ");
        }
        else {
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
