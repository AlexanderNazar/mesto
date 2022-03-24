let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let nameInput = popupElement.querySelector('input[name=name]');
let professionInput = popupElement.querySelector('input[name=profession]');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let formElement = popupElement.querySelector('.popup__container');

// Функция открытия Попапа.
function openPopup() {
  popupElement.classList.add('popup_opened');
// Подтягиваем текст профиля со страницы в формы Попапа.
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
}
//Функция закрытия Попапа.
function closePopup() {
  popupElement.classList.remove('popup_opened');
}
// Функция передачи текста из формы Попапа на страницу.
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  closePopup();
};

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
