export class PrimaryObject {
  constructor(args){
    this._ranking = args.ranking;
    // this._guid = generateGuid();
  }

  get guid() {
    return this._guid;
  }

  get ranking() {
    return this._ranking;
  }
  set ranking(val) {
    this._ranking = val;
  }
}