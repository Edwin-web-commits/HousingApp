export interface IPropertyBase{
  Id:number;
  SellRent:number;
  Name:string;
  PType:string; //Property type
  FType:string; //Furnishing type
  Price:number;
  BHK:number; //Bedroom,hall,kitchen
  BuiltArea:number;
  City:string;
  RTM:number;  //Ready to move
  Image?:string;
}
