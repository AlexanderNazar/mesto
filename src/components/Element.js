export default class Element {
  constructor(item) {
    this._item = item;
  }

  hideElement() {
    this._item.style.display = 'none';
  }
}
