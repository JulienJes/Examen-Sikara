export class Game {
  _id;
  name;
  platform;
  categories;
  theme;
  year;
  mode;
  developer;
  publisher;
  
  constructor(name, platform, categories, theme, year, mode, developer, publisher, id=null) {
      this._id = id;
      this.name = name;
      this.platform = platform;
      this.categories = categories;
      this.theme = theme;
      this.year = year;
      this.mode = mode;
      this.developer = developer;
      this.publisher = publisher;
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

  get categories() {
    return this._categories;
  }

  set categories(tmp) {
    this._categories = tmp;
  }

  get theme() {
    return this._theme;
  }

  set theme(tmp) {
    this._theme = tmp;
  }

  get year() {
    return this._year; 
  }

  set year(tmp) {
    this._year = tmp;
  }

  get mode() {
    return this._mode;
  }

  set mode(tmp) {
    this._mode = tmp;
  }

  get developer() {
    return this._developer;
  }

  set developer(tmp) {
    this._developer = tmp;
  }

  get publisher() {
    return this._publisher;
  }

  set publisher(tmp) {
    this.publisher = tmp;
  }

}