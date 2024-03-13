export class Category {
  _id;
  name;
  description;
    
  constructor(name, platform, id=null) {
      this._id = id;
      this.name = name;
      this.platform = platform;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
  }
  
  get name() {
    return this._name;
  }

  set name(tmp) {
    this._name = tmp;
  }

  get platform() {
    return this._platform;
  }

  set platform(tmp) {
    this._platform = tmp;
  }

}