/**
 * Uma entidade anêmica e uma classe que não carrega
 * regra de negocio tem apenas seus getters e setters.
 */

class Customer {
  
  _id: string;
  _name: string;
  _address: string;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }


  get address(): string {
    return this._address;
  }

  set id(id: string) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set address(address: string) {
    this._address = address;
  }
}