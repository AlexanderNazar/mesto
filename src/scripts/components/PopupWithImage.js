import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(cardElement, popupSelector) {
    super(popupSelector);
    this._name = cardElement.place;
    this._link = cardElement.link;
    this._imageOpenTitle = document.querySelector('.popup__image-title');
    this._imageOpenLink = document.querySelector('.popup__open-image');
  }
  //Метод открытия Превью изображения
  open = () => {
    this._popup.classList.add('popup_opened');
    this._imageOpenTitle.textContent = this._name;
    this._imageOpenLink.src = this._link;
    this._imageOpenLink.alt = this._name;
    document.addEventListener('keydown', this._handleEscClose);
    }
}
