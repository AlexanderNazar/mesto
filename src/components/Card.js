export default class Card {
  constructor(data, selectorsCard, userId, {changeLikePosition, handleCardClick, handleDeleteClick }) {
    this._card = data;
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = selectorsCard.cardTemplate;
    this._cardContent = selectorsCard.cardContent;
    this._cardTitle = selectorsCard.cardTitle;
    this._cardImage = selectorsCard.cardImage;
    this._cardHeart = selectorsCard.cardHeart;
    this._cardHeartActive = selectorsCard.cardHeartActive;
    this._cardButtonDelete = selectorsCard.cardButtonDelete;
    this._cardButtonDeleteInactive = selectorsCard.cardButtonDeleteInactive;
    this._cardCounterLike = selectorsCard.cardCounterLike;
    this._myId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._functionOpenCard = handleCardClick;
    this._functionOpenPopupConfirm = handleDeleteClick;
    this._functionChangeLikePosition = changeLikePosition;
  }
  //Метод получения из шаблона элемент Карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector(this._cardContent)
    .cloneNode(true);

    return cardElement;
  }
  //Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._cardCounterLikeElement = this._element.querySelector(this._cardCounterLike);

    this._setLikeEventListener();
    this._setDeleteImageEventListener();
    this._setOpenPreviewImageEventListener();

    this._titleImage = this._element.querySelector(this._cardTitle);

    this._titleImage.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._cardCounterLikeElement.textContent = this._likes.length;

    if (!(this._myId === this._ownerId)) {
      this._deleteButton.classList.add(this._cardButtonDeleteInactive);
    }

    if (this.isLiked()) {
      this._likeButton.classList.add(this._cardHeartActive);
    }

    return this._element;
  }
  //Метод определяет, принадлежит ли лайк пользователю
  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._myId));
  }
  //Метод Лайка карточки
  turnLikeButton = (data) => {
    this._cardCounterLikeElement.textContent = data.likes.length;
    if (!this.isLiked()) this._likeButton.classList.add(this._cardHeartActive);
    else this._likeButton.classList.remove(this._cardHeartActive);
    this._likes = data.likes;
  }
  //Метод установки слушателя Лайка на элемент сердечка
  _setLikeEventListener() {
    this._likeButton = this._element.querySelector(this._cardHeart);
    this._likeButton.addEventListener('click', () => this._functionChangeLikePosition(this._card));
  }
  //Метод удаления карточки
  deleteImage() {
    this._element.remove();
  }
  //Метод установки слушателя Удаления на элемент удаления
  _setDeleteImageEventListener = () => {
    this._deleteButton = this._element.querySelector(this._cardButtonDelete);
    this._deleteButton.addEventListener('click', () => this._functionOpenPopupConfirm(this));
  }
  //Метод установки слушателя открытия Превью на элемент картинку
  _setOpenPreviewImageEventListener() {
    this._cardImage = this._element.querySelector(this._cardImage);
    this._cardImage.addEventListener('click', () => this._functionOpenCard());
  }
}
