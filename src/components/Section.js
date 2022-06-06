export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }
  //Метод отрисовки карточек на страницу
  renderItems = (items) => {
    this._initialCards = items;
    this._initialCards.forEach(item => this._container.append(this._renderer(item)));
  }
  //Метод добавления карточки настраницу
  addItem = (object) => {
    this._container.prepend(this._renderer(object));
  }
}
