import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageOpenTitle = this._popup.querySelector('.popup__image-title');
    this._imageOpenLink = this._popup.querySelector('.popup__open-image');
  }
  //Метод открытия Превью изображения
  open = (cardElement) => {
    super.open();
    this._imageOpenTitle.textContent = cardElement.name;
    this._imageOpenLink.src = cardElement.link;
    this._imageOpenLink.alt = cardElement.name;
    }
}
