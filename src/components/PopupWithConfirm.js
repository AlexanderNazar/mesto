import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonDelete = this._popup.querySelector('.popup__save-button');
    this._form = this._popup.querySelector('.popup__form');
    //this._deleteCard = deleteCard;
    this._submitButton = this._form.querySelector('.popup__save-button');
  }

  close() {
    super.close();
    this._form.reset();
  }

  setSubmitHanlder(callback) {
    this._handleSubmit = callback;

  }
  //Метод, включающий визуализацию ожидания загрузки
  visualizeLoading(text) {
    this._submitButton.textContent = `${text}`;
  }
  //Метод, подключающий слушатель на закрытие Попапа по Крестику и Оверлею, а также подтверждение удаления карточки
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }
}
