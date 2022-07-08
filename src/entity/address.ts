export default class Address {
  
  _street: string;
  _number: string;
  _zipcode: string;
  _city: string;

  constructor(street: string, number: string, zipcode: string, city: string) {
    this._street = street;
    this._number = number;
    this._zipcode = zipcode;
    this._city = city;
  }

  validate() {
    if(this._street.length === 0 ) {
      throw new Error("Street is required");
    }
    //...
  }

  toString(): string {
    return `${this._street}, ${this._number}, ${this._zipcode} ${this._city}`;
  } 
}