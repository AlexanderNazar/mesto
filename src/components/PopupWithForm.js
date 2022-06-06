import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input-text'));
    this._form = this._popup.querySelector('.popup__form');
    this._submitForm = submitForm;

    this._submitButton = this._form.querySelector('.popup__save-button');
  }
  //Метод закрытия Попапа
  close() {
    super.close();
    this._form.reset();
  }
  //Метод, возвращающий Объект со значениями Инпатов формы
  _getInputValues() {
      const returnObject = {};
      this._inputList.forEach(input => returnObject[input.name] = input.value)
      return returnObject;
  }
  //Метод, включающий визуализацию ожидания загрузки
  visualizeLoading(text) {
    this._submitButton.textContent = `${text}`;
  }
  //Метод, подключающий слушатель на закрытие Попапа по Крестику и Оверлею, а также Сабмита формы
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }
}
