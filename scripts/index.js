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
//const formEditUser = document.forms.profile;
//const formAddImage = document.forms.add;

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
    document.addEventListener('keydown', (evt) => closePopupEscape(evt, popupOpenedImage));
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

///////////////////////////////////////////////////
/*
const handleInput = (evt) => {
  const currentForm = evt.currentTarget;
  const input = evt.target;
  const submitButton = currentForm.querySelector('.popup__save-button');

  validateInput(input);
  isValid(input);
  toggleButtonState(currentForm, submitButton, 'popup__save-button_invalid');
}

const isValid = (input) => {
  if (input.checkValidity()) {
    hideInputError(input);
  } else {
    showInputError(input);
  }
}

const toggleButtonState = (form, button, classButtonInvalid) => {
  if (form.checkValidity()) {
    button.disabled = false;
    button.classList.remove(classButtonInvalid);
  } else {
    button.disabled = true;
    button.classList.add(classButtonInvalid);
  }
}

const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}

const showInputError = (element) => {
  element.classList.add('popup__input-text_type_error');
}

const hideInputError = (element) => {
  element.classList.remove('popup__input-text_type_error');
}

const validateInitiallyInput = (element) => {
  const inputList = Array.from(element.querySelectorAll('.popup__input-text'));
  inputList.forEach((inputElement) => {
  isValid(inputElement);
  validateInput(inputElement);
  })
};

const closePopupEscape = (evt, popup) => {
  if (evt.key === "Escape") {
    closePopup(popup);
    document.removeEventListener('keydown', (evt) => closePopupEscape(evt, popup));
  }
}
*/
//////////////////////////////////////////////////////////////////

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  validateInitiallyInput(formEditUser);
  toggleButtonState(formEditUser, formEditUser.elements.submit, 'popup__save-button_invalid');
  openPopup(popupEditProfile);
  document.addEventListener('keydown', (evt) => closePopupEscape(evt, popupEditProfile));
});

buttonAddImage.addEventListener('click', () => {
  toggleButtonState(formAddImage, formAddImage.elements.submit, 'popup__save-button_invalid');
  openPopup(popupAddImage);
  document.addEventListener('keydown', (evt) => closePopupEscape(evt, popupAddImage));
});

popupOpenedImage.addEventListener('click', (evt) => closePopup(evt.target));
popupEditProfile.addEventListener('click', (evt) => closePopup(evt.target));
popupAddImage.addEventListener('click', (evt) => closePopup(evt.target));


buttonСlosing.addEventListener('click', () => closePopup(popupEditProfile));

buttonСlosingAddImage.addEventListener('click', () => closePopup(popupAddImage));

buttonСlosingImage.addEventListener('click', () => closePopup(popupOpenedImage));

formElement.addEventListener('submit', sendFormSubmit);

formElementAddImage.addEventListener('submit', addElement);

//formEditUser.addEventListener('input', handleInput);
//formAddImage.addEventListener('input', handleInput);
