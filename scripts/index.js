import Card from './Сard.js';
import FormValitation from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const selectorsCard = {
  cardTemplate: '#element-template',
  cardContent: '.element',
  cardTitle: '.element__title',
  cardImage: '.element__image',
  cardHeart: '.element__heart',
  cardHeartActive: 'element__heart_active',
  cardButtonDelete: '.element__delete',
  popupPreview: '.popup_type_preview',
  popupPreviewTitle: '.popup__image-title',
  popupPreviewLink: '.popup__open-image'
}

const selectorsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input-text_type_error'
}

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_add-image');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const profileEditButton = document.querySelector('.profile__edit-button');
const buttonAddImage = document.querySelector('.profile__add-button');

const buttonSubmitEditProfile = popupEditProfile.querySelector('.popup__save-button');
const buttonSubmitAddButton = popupAddImage.querySelector('.popup__save-button');

const formEditUser = document.forms.profile;
const formAddImage = document.forms.add;

const inputListFormProfileEdit = Array.from(popupEditProfile.querySelectorAll('.popup__input-text'));
const inputListFormAddButton = Array.from(popupAddImage.querySelectorAll('.popup__input-text'));
const nameInput = popupEditProfile.querySelector('input[name=name]');
const professionInput = popupEditProfile.querySelector('input[name=profession]');
const placeInput = document.querySelector('input[name=place]');
const linkInput = popupAddImage.querySelector('input[name=link]');

const cardContainer = document.querySelector('.elements');

//Функция открытия Попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}
//Функция закрытия Попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}
//Функция закрытия Попапа клавишей Esc
const closePopupEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//Подключение слушателей закрытия всех Попапов при нажатии по Оверлею и Крестику
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
//Функция создания карточки
const createCard = (item) => {
  const card = new Card(item, selectorsCard, openPopup);
  const cardElement = card.generateCard();
  return cardElement;
  }
//Создаем экземпляры класса Кард и отрисовываем из объекта initialCards на страницу
initialCards.forEach(item => cardContainer.append(createCard(item)));
//Создаем экземпляры класса Валидации
const validationFormEditUser = new FormValitation(selectorsForm, formEditUser);
const validationFormAddImage = new FormValitation(selectorsForm, formAddImage);
//Подключаем валидацию к формам
validationFormEditUser.enableValidation();
validationFormAddImage.enableValidation();
//Логика открытия Попапа с формой изменения данных профиля
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  inputListFormProfileEdit.forEach(inputElement => validationFormEditUser.checkInputValidity(inputElement));
  validationFormEditUser.toggleButtonState(inputListFormProfileEdit, buttonSubmitEditProfile);
  openPopup(popupEditProfile);
})
//Логика открытия Попапа с формой добавления карточек
buttonAddImage.addEventListener('click', () => {
  inputListFormAddButton.forEach(inputElement => validationFormAddImage.hideInputError(inputElement));
  formAddImage.reset();
  validationFormAddImage.toggleButtonState(inputListFormAddButton, buttonSubmitAddButton);
  openPopup(popupAddImage);
})
//Функция изменения данных профиля
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(popupEditProfile);
}
//Функция добавления карточки на страницу
const handleAddImageFormSubmit = (evt) => {
  evt.preventDefault();
  const object = {
    name: placeInput.value,
    link: linkInput.value
  };
  cardContainer.prepend(createCard(object));
  closePopup(popupAddImage);
  evt.target.reset();
}
//Логика нажатия кнопки Сохранить формы изменения профиля
formEditUser.addEventListener('submit', handleProfileFormSubmit);
//Логика нажатия кнопки Сохранить формы добавления карточки
formAddImage.addEventListener('submit', handleAddImageFormSubmit);
