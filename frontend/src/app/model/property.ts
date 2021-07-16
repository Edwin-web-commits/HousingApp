import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
    id: number;
    sellRent: number;
    name: string;
    propertyType: string;
    propertyTypeId: number;
    bhk: number;
    furnishingTypeId: number;
    furnishingType: string;
    price: number;
    builtArea: number;
    carpetArea?: number;
    address: string;
    address2?: string;
    cityId: number;
    city: string;
    floorNo?: string;
    totalFloor?: string;
    readyToMove: boolean;
    age?: string;
    mainEntrance?: string;
    security?: number;
    gated?: boolean;
    maintanance?: number;
    estPossesionOn?: string;
    image?: string;
    description?: string;
}
