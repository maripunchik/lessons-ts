import StringToNumberTransformer from "../transformation/StringToNumberTransformer.js";
import NumberToStringTransformer from "../transformation/NumberToStringTransformer.js";
import ObjectToJSONTransformer from "../transformation/ObjectToJSONTransformer.js";
const stringToNumber = new StringToNumberTransformer();
const numberToString = new NumberToStringTransformer();
const objectToJSON = new ObjectToJSONTransformer();
export const transformations = [
    {
        label: "String -> Number",
        transformer: stringToNumber,
        values: ["55", "3.14", "winter"],
    },
    {
        label: "Number -> String",
        transformer: numberToString,
        values: [100, 50, 77, -5, 0],
    },
    {
        label: "Object -> JSON",
        transformer: objectToJSON,
        values: [{ name: "Ivan" }, { valid: true, score: 99 }],
    },
];
// const datasets ={
// 	"String - Number": ['55','3.14', 'winter'],
// 	"Number - String": [100,50,77,-5,0],
// 	"Object - JSON": [{name: "Ivan"},{valid:true,score:99}]
// }
// processDatasets(datasets, stringToNumber, logTransformedValues)
// processDatasets(datasets, numberToString, logTransformedValues);
// processDatasets(datasets, objectToJson, logTransformedValues);
