import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ deleteCard }, popupSelector) {
    super(popupSelector);
    this._buttonDelete = this._popup.querySelector('.popup__save-button');
    this._deleteCard = deleteCard;
  }
  //Метод открытия Попапа
  open() {
    super.open();
    document.addEventListener('keydown', this._handleEnterDelete);
  }
  //Метод закрытия Попапа
  close() {
    super.close();
    document.removeEventListener('keydown', this._handleEnterDelete);
  }
  //Метод закрытия Попапа клавишей Enter
  _handleEnterDelete = (evt) => {
    if (evt.key === 'Enter') {
      this._deleteCard();
      this.close();
    }
  }
  //Метод, подключающий слушатель на закрытие Попапа по Крестику и Оверлею, а также подтверждение удаления карточки
  setEventListeners() {
    super.setEventListeners();

    this._buttonDelete.addEventListener('click', () => {
      this._deleteCard();
      this.close();
    })
  }
}
