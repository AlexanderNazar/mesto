export default class Card {
  constructor(initialCards, selectorsCard, { handleCardClick, handleDeleteClick }) {
    this._name = initialCards.place;
    this._link = initialCards.link;
    this._cardTemplate = selectorsCard.cardTemplate;
    this._cardContent = selectorsCard.cardContent;
    this._cardTitle = selectorsCard.cardTitle;
    this._cardImage = selectorsCard.cardImage;
    this._cardHeart = selectorsCard.cardHeart;
    this._cardHeartActive = selectorsCard.cardHeartActive;
    this._cardButtonDelete = selectorsCard.cardButtonDelete;
    this._functionOpenCard = handleCardClick;
    this._functionOpenPopupConfirm = handleDeleteClick;
  }
  //Метод получения из шаблона элемент Карточки
  _getTemplate = () => {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector(this._cardContent)
    .cloneNode(true);

    return cardElement;
  }
  //Метод создания карточки
  generateCard = () => {
    this._element = this._getTemplate();

    this._setLikeEventListener();
    this._setDeleteImageEventListener();
    this._setOpenPreviewImageEventListener();

    const titleImage = this._element.querySelector(this._cardTitle);
    const cardImage = this._element.querySelector(this._cardImage);

    titleImage.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }
  //Метод Лайка карточки
  _turnLikeButton = () => {
    this._likeButton = this._element.querySelector(this._cardHeart);
    this._likeButton.classList.toggle(this._cardHeartActive);
  }
  //Метод установки слушателя Лайка на элемент сердечка
  _setLikeEventListener = ()  => {
    this._likeButton = this._element.querySelector(this._cardHeart);
    this._likeButton.addEventListener('click', this._turnLikeButton);
  }
  //Метод удаления карточки
  deleteImage = () => {
    this._element.remove();
  }
  //Метод установки слушателя Удаления на элемент удаления
  _setDeleteImageEventListener = () => {
    const deleteButton = this._element.querySelector(this._cardButtonDelete);
    deleteButton.addEventListener('click', () => this._functionOpenPopupConfirm());
  }
  //Метод установки слушателя открытия Превью на элемент картинку
  _setOpenPreviewImageEventListener = () => {
    const cardImage = this._element.querySelector(this._cardImage);
    cardImage.addEventListener('click', () => this._functionOpenCard());
  }
}
