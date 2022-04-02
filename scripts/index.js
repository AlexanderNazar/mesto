const popupElement = document.querySelector('.popup');
const popupAddImage = document.querySelectorAll('.popup')[1];
const popupOpenedImage = document.querySelectorAll('.popup')[2];
const profileEditButton = document.querySelector('.profile__edit-button');
const buttonСlosing = popupElement.querySelector('.popup__close-button');
const buttonСlosingAddImage = document.querySelectorAll('.popup__close-button')[1];
const buttonСlosingImage = document.querySelectorAll('.popup__close-button')[2];
const buttonAddImage = document.querySelector('.profile__add-button');
const nameInput = popupElement.querySelector('input[name=name]');
const professionInput = popupElement.querySelector('input[name=profession]');
const placeInput = document.querySelector('input[name=place]');
const linkInput = document.querySelector('input[name=link]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = popupElement.querySelector('.popup__container');
const formElementAddImage = document.querySelectorAll('.popup__container')[1];
const cardAlbum = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template');
const imageOpenTitle = document.querySelector('.popup__image-title');
const imageOpenLink = document.querySelector('.popup__open-image');

//Функция создания карточки
const createCard = (card) => {
  const cardElement = cardTemplate.content.querySelector('.elements__element').cloneNode(true);
  const likeButton = cardElement.querySelector('.elements__heart');
  const deleteButton = cardElement.querySelector('.elements__delete');
  const cardImage = cardElement.querySelector('.elements__image');

  cardElement.querySelector('.elements__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  //Лайк
  const turnLikeButton = (evt) => {
    evt.target.classList.toggle('elements__heart_active');
  };
  likeButton.addEventListener('click', turnLikeButton);
  //Удаление карточки по щелчку крестика
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });
  //Открытие Попапа с изображением
  cardImage.addEventListener('click', () => {
    openPopup(popupOpenedImage);
    imageOpenTitle.textContent = card.name;
    imageOpenLink.src = card.link;
  });

  return cardElement;
};
//Добавление новой карточки
const addElement = (evt) => {
  evt.preventDefault();
  const object = {
    name: placeInput.value,
    link: linkInput.value
  };
  renderCard(cardAlbum, object);
  closePopup(popupAddImage);
  placeInput.value = '';
  linkInput.value = '';
};
//Функция отрисовки новой карточки
const renderCard = (placeRender, card) => {
  placeRender.prepend(createCard(card));
};
// Функция открытия Попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
//Функция закрытия Попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};
// Функция передачи текста из формы Попапа на страницу
const sendFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(popupElement);
};
//Функция отрисовки карточек из массива
const cardElements = initialCards.map(card => createCard(card));

cardAlbum.append(...cardElements);

profileEditButton.addEventListener('click', () => {
  openPopup(popupElement);
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
});

buttonAddImage.addEventListener('click', () => openPopup(popupAddImage));

buttonСlosing.addEventListener('click', () => closePopup(popupElement));

buttonСlosingAddImage.addEventListener('click', () => closePopup(popupAddImage));

buttonСlosingImage.addEventListener('click', () => closePopup(popupOpenedImage));

formElement.addEventListener('submit', sendFormSubmit);

formElementAddImage.addEventListener('submit', addElement);
