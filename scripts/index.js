const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_add-image');
const popupOpenedImage = document.querySelector('.popup_type_preview');
const profileEditButton = document.querySelector('.profile__edit-button');
const buttonСlosing = popupEditProfile.querySelector('.popup__close-button_type_profile');
const buttonСlosingAddImage = popupAddImage.querySelector('.popup__close-button_type_add-image');
const buttonСlosingImage = popupOpenedImage.querySelector('.popup__close-button_type_preview');
const buttonAddImage = document.querySelector('.profile__add-button');
const nameInput = popupEditProfile.querySelector('input[name=name]');
const professionInput = popupEditProfile.querySelector('input[name=profession]');
const placeInput = document.querySelector('input[name=place]');
const linkInput = popupAddImage.querySelector('input[name=link]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = popupEditProfile.querySelector('.popup__container_type_profile');
const formElementAddImage = popupAddImage.querySelector('.popup__container_type_add-image');
const cardAlbum = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template');
const imageOpenTitle = popupOpenedImage.querySelector('.popup__image-title');
const imageOpenLink = popupOpenedImage.querySelector('.popup__open-image');
const popups = document.querySelectorAll('.popup');
const formEditUser = document.forms.profile;
const inputListFormProfileEdit = Array.from(popupEditProfile.querySelectorAll('.popup__input-text'));
const buttonSubmitEditProfile = popupEditProfile.querySelector('.popup__save-button');
const inputListFormAddButton = Array.from(popupAddImage.querySelectorAll('.popup__input-text'));
const buttonSubmitAddButton = popupAddImage.querySelector('.popup__save-button');

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
    imageOpenLink.src = card.link; //За присваивание Alt отвечает 32 строка
    openPopup(popupOpenedImage);
  });
  return cardElement;
};
//Добавление новой карточки
const handleAddImageFormSubmit = (evt) => {
  evt.preventDefault();
  const object = {
    name: placeInput.value,
    link: linkInput.value
  };
  renderCard(cardAlbum, object);
  closePopup(popupAddImage);
  evt.target.reset();
};
//Функция отрисовки новой карточки
const renderCard = (placeRender, card) => {
  placeRender.prepend(createCard(card));
};
//Функция закрытия Попапов при нажатии клавиши Escape
const closePopupEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//Функция открытия Попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};
//Функция закрытия Попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};
//Функция передачи текста из формы Попапа на страницу
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(popupEditProfile);
};
//Функция отрисовки карточек из массива
const cardElements = initialCards.map(card => createCard(card));
cardAlbum.append(...cardElements);
//Логика при нажатии кнопки изменения профиля
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  const inputList = Array.from(formEditUser.querySelectorAll('.popup__input-text'));
  inputList.forEach((inputElement) => {
  checkInputValidity(formEditUser, inputElement, 'popup__input-text_type_error');
});
  toggleButtonState(inputListFormProfileEdit, buttonSubmitEditProfile, 'popup__save-button_invalid');
  openPopup(popupEditProfile);
});
//Логика при нажатии кнопки открытия Попапа добавления изображения
buttonAddImage.addEventListener('click', () => {
  toggleButtonState(inputListFormAddButton, buttonSubmitAddButton, 'popup__save-button_invalid');
  openPopup(popupAddImage);
});
//Логика закрытия Попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})
//Логика при нажатии кнопки Сохранить
formElement.addEventListener('submit', handleProfileFormSubmit);
formElementAddImage.addEventListener('submit', handleAddImageFormSubmit);
