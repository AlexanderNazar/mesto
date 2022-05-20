import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input-text'));
    this._form = this._popup.querySelector('.popup__form');
    this._submitForm = submitForm;
  }
  //Метод закрытия Попапа
  close = () => {
    super.close();
    this._form.reset();
  }
  //Метод, возвращающий Объект со значениями Инпатов формы
  _getInputValues = () => {
      const returnObject = {};
      for (let i = 0; i < this._inputList.length; i++){
          returnObject[this._inputList[i]['name']] = this._inputList[i]['value'];
      }
      return returnObject;
  }
  //Метод, подключающий слушатель на закрытие Попапа по Крестику и Оверлею, а также Сабмита формы
  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }
}
