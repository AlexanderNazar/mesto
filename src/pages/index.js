import './index.css';
import { profileEditButton, buttonAddImage, avatarUpdateButton, formEditUser,
  formAddImage, inputListFormAddButton, nameInput, aboutInput, profileName, profileAbout, cardContainer} from '../utils/constants.js';
import { initialCards } from '../utils/initialCards.js';
import { selectorsCard } from '../utils/cardConfig.js';
import { selectorsForm } from '../utils/validationConfig.js';
import Card from '../components/Card.js';
import FormValitation from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'ed73c6b7-f907-48aa-a72e-ee4df672ba1b',
    'Content-Type': 'application/json'
  }
});

api.setUserInfo()
  .then(data => {
    const userInfo = new UserInfo(data)
    userInfo.setUserInfo()
  })
  .catch(err => console.log(`Ошибка: ${err.status}`));

const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, selectorsCard, {
      handleCardClick: () => {
        const imagePreview = new PopupWithImage('.popup_type_preview');
        imagePreview.open(item);
        imagePreview.setEventListeners();
      },
      handleDeleteClick: () => {
        const popupConfirm = new PopupWithConfirm({
          deleteCard: () => card.deleteImage()
        },
        '.popup_type_confirm');
        popupConfirm.open();
        popupConfirm.setEventListeners();
      }
    });
    const cardElement = card.generateCard();
    return cardElement;
  }},
  cardContainer
)
//Отрисовываем карточки из массива на страницу
renderCards.renderItems();


//api.getUserInfo().then(data => userInfo.setUserInfo(data))


const validationFormEditUser = new FormValitation(selectorsForm, formEditUser);
const validationFormAddImage = new FormValitation(selectorsForm, formAddImage);
//Подключаем валидацию к формам
validationFormEditUser.enableValidation();
validationFormAddImage.enableValidation();


const popupEditProfileClass = new PopupWithForm({
  submitForm: (inputValueOject) => {
    console.log(inputValueOject)
    console.log(inputValueOject.name)
    console.log(inputValueOject.about)

    api.changeUserInfo(inputValueOject)
      .then(data => {
        console.log(data);
        const userInfo = new UserInfo(data);
        userInfo.setUserInfo();
      })
      .catch(err => console.log(err));
    popupEditProfileClass.close();
  }},
  '.popup_type_profile'
)

const popupAddImageClass = new PopupWithForm({
  submitForm: (inputValueOject) => {
    renderCards.addItem(inputValueOject);
    popupAddImageClass.close();
  }},
  '.popup_type_add-image'
)


const popupUpdateAvatarClass = new Popup('.popup_type_update-avatar');

//Подключаем слушатели на Попапы с формами
popupEditProfileClass.setEventListeners();
popupAddImageClass.setEventListeners();


popupUpdateAvatarClass.setEventListeners();


//Подключаем слушатели на кнопку открытия Попапа изменения профиля
profileEditButton.addEventListener('click', () => {
  /*api.getUserInfo().then(data => {
    const userInfo = new UserInfo(data)
    userInfo.getUserInfo(data)
  })*/
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  //userInfo.getUserInfo();
  validationFormEditUser.checkAllInputValidity();
  validationFormEditUser.toggleButtonState();
  popupEditProfileClass.open();
})
//Подключаем слушатели на кнопку открытия Попапа добавления карточки
buttonAddImage.addEventListener('click', () => {
  inputListFormAddButton.forEach(inputElement => validationFormAddImage.hideInputError(inputElement));
  validationFormAddImage.toggleButtonState();
  popupAddImageClass.open();
})

avatarUpdateButton.addEventListener('click', () => popupUpdateAvatarClass.open())
