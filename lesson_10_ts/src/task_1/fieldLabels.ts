import { DraftAuto } from "./types.js";

export const draftAutoFields: [keyof DraftAuto, string][] = [
  ["id", "ID"],
  ["brand", "Марка"],
  ["color", "Колір"],
  ["year", "Рік випуску"],
  ["owner", "Власник"],
];