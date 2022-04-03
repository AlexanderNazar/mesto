const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_add-image');
const popupOpenedImage = document.querySelector('.popup_type_preview');
const profileEditButton = document.querySelector('.profile__edit-button');
const buttonСlosing = popupEditProfile.querySelector('.popup__close-button_type_profile');
const buttonСlosingAddImage = document.querySelector('.popup__close-button_type_add-image');
const buttonСlosingImage = document.querySelector('.popup__close-button_type_preview');
const buttonAddImage = document.querySelector('.profile__add-button');
const nameInput = popupEditProfile.querySelector('input[name=name]');
const professionInput = popupEditProfile.querySelector('input[name=profession]');
const placeInput = document.querySelector('input[name=place]');
const linkInput = document.querySelector('input[name=link]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = popupEditProfile.querySelector('.popup__container_type_profile');
const formElementAddImage = document.querySelector('.popup__container_type_add-image');
const cardAlbum = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template');
const imageOpenTitle = document.querySelector('.popup__image-title');
const imageOpenLink = document.querySelector('.popup__open-image');

//Функция создания карточки
const createCard = (card) => {
  const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);
  const likeButton = cardElement.querySelector('.element__heart');
  const deleteButton = cardElement.querySelector('.element__delete');
  const cardImage = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  //Лайк
  const turnLikeButton = (evt) => {
    evt.target.classList.toggle('element__heart_active');
  };
  likeButton.addEventListener('click', turnLikeButton);
  //Удаление карточки по щелчку крестика
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });
  //Открытие Попапа с изображением
  cardImage.addEventListener('click', () => {
    imageOpenTitle.textContent = card.name;
    imageOpenLink.src = card.link;
    openPopup(popupOpenedImage);
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
  document.querySelector('.popup__form_type_add-image').reset();
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
  closePopup(popupEditProfile);
};
//Функция отрисовки карточек из массива
const cardElements = initialCards.map(card => createCard(card));

cardAlbum.append(...cardElements);

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(popupEditProfile);
});

buttonAddImage.addEventListener('click', () => openPopup(popupAddImage));

buttonСlosing.addEventListener('click', () => closePopup(popupEditProfile));

buttonСlosingAddImage.addEventListener('click', () => closePopup(popupAddImage));

buttonСlosingImage.addEventListener('click', () => closePopup(popupOpenedImage));

formElement.addEventListener('submit', sendFormSubmit);

formElementAddImage.addEventListener('submit', addElement);
