import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{

    Id: number;
    SellRent: number;
    Name: string;
    PType: string;
    BHK: number;
    FType: string;
    Price: number;
    BuiltArea: number;
    CarpetArea?: number;
    Image?: string;
    Address: string;
    Address2?: string;
    City: string;
    Description?: string;
    FloorNo?: number;
    TotalFloor?: number;
    RTM: number;
    AOP?: number; // age of property
    MainEntrance?: string;
    Gated?: number;
    Security?: number;
    Maintenance?: number;
    Posession?: string;
    PostedOn: string;
    PostedBy: number;
}
