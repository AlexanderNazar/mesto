export default class Card {
  constructor(data, selectorsCard, userId, {apiPutLike, apiDeleteLike, handleCardClick, handleDeleteClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = selectorsCard.cardTemplate;
    this._cardContent = selectorsCard.cardContent;
    this._cardTitle = selectorsCard.cardTitle;
    this._cardImage = selectorsCard.cardImage;
    this._cardHeart = selectorsCard.cardHeart;
    this._cardHeartActive = selectorsCard.cardHeartActive;
    this._cardButtonDelete = selectorsCard.cardButtonDelete;
    this._cardCounterLike = selectorsCard.cardCounterLike;
    this._myId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._apiPutLike = apiPutLike;
    this._apiDeleteLike = apiDeleteLike;
    this._functionOpenCard = handleCardClick;
    this._functionOpenPopupConfirm = handleDeleteClick;
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
      this._deleteButton.style.display = 'none';
    }

    if (this._likes.find((obj) => this._myId === obj._id)) {
      this._likeButton.classList.add(this._cardHeartActive);
    }

    return this._element;
  }
  //Метод Лайка карточки
  _turnLikeButton = () => {
    if (!this._likeButton.classList.contains(this._cardHeartActive)) {
      this._apiPutLike()
      .then((data) => {
        this._cardCounterLikeElement.textContent = data.likes.length;
      })
      .catch(err => console.log(err));
      this._likeButton.classList.add(this._cardHeartActive);
    } else {
      this._apiDeleteLike()
        .then((data) => {
          this._cardCounterLikeElement.textContent = data.likes.length;
        })
      .catch(err => console.log(err));
      this._likeButton.classList.remove(this._cardHeartActive);
    }}

  //Метод установки слушателя Лайка на элемент сердечка
  _setLikeEventListener() {
    this._likeButton = this._element.querySelector(this._cardHeart);
    this._likeButton.addEventListener('click', this._turnLikeButton);
  }
  //Метод удаления карточки
  deleteImage() {
    this._element.remove();
  }
  //Метод установки слушателя Удаления на элемент удаления
  _setDeleteImageEventListener() {
    this._deleteButton = this._element.querySelector(this._cardButtonDelete);
    this._deleteButton.addEventListener('click', () => this._functionOpenPopupConfirm());
  }
  //Метод установки слушателя открытия Превью на элемент картинку
  _setOpenPreviewImageEventListener() {
    this._cardImage = this._element.querySelector(this._cardImage);
    this._cardImage.addEventListener('click', () => this._functionOpenCard());
  }
}
