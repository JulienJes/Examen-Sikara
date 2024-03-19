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
    return this.description;
  }

  set platform(tmp) {
    this.description = tmp;
  }

}