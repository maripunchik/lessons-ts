
import { allowedBrands } from "./validation/allowed";
import { allowedColors } from "./validation/allowed";


export type AutoBrand = typeof allowedBrands[number]
export type AutoColor = typeof allowedColors[number]

//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
export type Auto = {
  id: string;
  brand: AutoBrand;
  color: AutoColor;
  year: number;
  owner: string;
};

// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.

export type DraftAuto = Partial<Auto>;

