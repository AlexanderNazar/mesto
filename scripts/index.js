const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const closeButtonAddImage = document.querySelectorAll('.popup__close-button')[1];
const closeButtonImage = document.querySelectorAll('.popup__close-button')[2];
const addButton = document.querySelector('.profile__add-button');
let nameInput = popupElement.querySelector('input[name=name]');
let professionInput = popupElement.querySelector('input[name=profession]');
let placeInput = document.querySelector('input[name=place]');
let linkInput = document.querySelector('input[name=link]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = popupElement.querySelector('.popup__container');
const formElementAddImage = document.querySelectorAll('.popup__container')[1];
const cardAlbum = document.querySelector('.elements__album');
const popupImage = document.querySelector('.popup-image');

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

//Функция создания карточки
const createCards = (function (name, link) {
  const cardTemplate = document.querySelector('#element-template');
  const cardElement = cardTemplate.content.querySelector('.elements__element').cloneNode(true);
  const likeButton = cardElement.querySelector('.elements__heart');
  const deleteButton = cardElement.querySelector('.elements__delete');
  const cardImage = cardElement.querySelector('.elements__image');

  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__image').src = link;
//Лайк
  likeButton.addEventListener('click', function () {
  likeButton.classList.toggle('elements__heart_active');
  });
//Удаление карточки по щелчку крестика
  deleteButton.addEventListener('click', function () {
  cardElement.remove();
  });
//Открытие Попапа с изображением
  cardImage.addEventListener('click', function () {
  popupImage.classList.add('popup-image_opened');
  document.querySelector('.popup-image__title').textContent = name;
  document.querySelector('.popup-image__image').src = link;
  })

  return cardElement;
});

//Добавление новой карточки
function addElement (evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('#element-template');
  const cardElement = cardTemplate.content.querySelector('.elements__element').cloneNode(true);
  const name = placeInput.value;
  const link = linkInput.value;
  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__image').src = link;
  renderCard(name, link);
  closePopupAddImage();
  placeInput.value = '';
  linkInput.value = '';
};

  const renderCard = function(name, link) {
  cardAlbum.prepend(createCards(name, link));
};

// Функция открытия Попапа изменения профиля
function openPopup() {
  popupElement.classList.add('popup_opened');
// Подтягиваем текст профиля со страницы в формы Попапа
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
};
// Функция открытия Попапа добавления карточки
function openPopupAddImage() {
  popupElement.nextElementSibling.classList.add('popup_opened');
};
//Функция закрытия Попапа изменения профиля
function closePopup() {
  popupElement.classList.remove('popup_opened');
};
// Функция закрытия Попапа добавления карточки
function closePopupAddImage() {
  popupElement.nextElementSibling.classList.remove('popup_opened');
};
// Функция закрытия Попапа с изображением
function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
};
// Функция передачи текста из формы Попапа на страницу
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  closePopup();
};

const cardElements = initialCards.map(function (card) {
  return createCards(card.name, card.link);
});

cardAlbum.append(...cardElements);

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

closeButtonAddImage.addEventListener('click', closePopupAddImage);

closeButtonImage.addEventListener('click', closePopupImage);

addButton.addEventListener('click', openPopupAddImage);

formElement.addEventListener('submit', formSubmitHandler);

formElementAddImage.addEventListener('submit', addElement);
