import './index.css';
import { profileEditButton, buttonAddImage, avatarUpdateButton, formEditUser, formUpdateAvatar,
  formAddImage, inputUpdateAvatar, inputListFormAddButton, avatarElement, cardContainer } from '../utils/constants.js';
import { selectorsCard } from '../utils/cardConfig.js';
import { selectorsForm } from '../utils/validationConfig.js';
import Card from '../components/Card.js';
import FormValitation from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'ed73c6b7-f907-48aa-a72e-ee4df672ba1b',
    'Content-Type': 'application/json'
  }
});

let userId;

const userInfo = new UserInfo();

//Получаем значения профиля с  сервера
api.setUserInfo()
  .then(data => {
    avatarElement.src = data.avatar;
    userInfo.setUserInfo(data);
    userId = data._id;
  })
  .catch(err => console.log(err));

const renderCards = new Section({
  renderer: (item) => {
    const card = new Card(item, selectorsCard, userId, {
      apiPutLike: () => api.putLike(item._id),
      apiDeleteLike: () => api.deleteLike(item._id),
      handleCardClick: () => {
        const imagePreview = new PopupWithImage('.popup_type_preview');
        imagePreview.open(item);
        imagePreview.setEventListeners();
      },
      handleDeleteClick: () => {
        const popupConfirm = new PopupWithConfirm({
          deleteCard: () => {
            api.deleteImage(item._id)
            .catch(err => console.log(err));
            card.deleteImage();
          }
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
);

//Отрисовываем карточки с сервера
api.getInitialCards()
  .then(data => renderCards.renderItems(data))
  .catch(err => console.log(err))

const validationFormEditUser = new FormValitation(selectorsForm, formEditUser);
const validationFormAddImage = new FormValitation(selectorsForm, formAddImage);
const validationFormUpdateAvatar = new FormValitation(selectorsForm, formUpdateAvatar);

//Подключаем валидацию к формам
validationFormEditUser.enableValidation();
validationFormAddImage.enableValidation();
validationFormUpdateAvatar.enableValidation();

const popupEditProfileClass = new PopupWithForm({
  submitForm: (inputValueOject) => {
    api.changeUserInfo(inputValueOject)
      .then(data => userInfo.setUserInfo(data))
      .catch(err => console.log(err))
      .finally(popupEditProfileClass.visualizeLoading('Сохранение...'))
    popupEditProfileClass.close()
  }},
  '.popup_type_profile'
)

const popupAddImageClass = new PopupWithForm({
  submitForm: (data) => {
    api.addCard(data)
      .then(data => {
        renderCards.addItem(data);
        popupAddImageClass.close()
      })
      .catch(err => console.log(err))
      .finally(popupAddImageClass.visualizeLoading('Сохранение...'))
    }},
  '.popup_type_add-image'
  )

const popupUpdateAvatarClass = new PopupWithForm({
  submitForm: (inputValueOject) => {
    api.updateAvatar(inputValueOject)
      .then(data => {
        avatarElement.src = data.avatar;
        popupUpdateAvatarClass.close()
      })
      .catch(err => console.log(err))
      .finally(popupUpdateAvatarClass.visualizeLoading('Сохранение...'))
    }},
    '.popup_type_update-avatar'
  )

//Подключаем слушатели на Попапы с формами
popupEditProfileClass.setEventListeners();
popupAddImageClass.setEventListeners();
popupUpdateAvatarClass.setEventListeners();

//Подключаем слушатели на кнопку открытия Попапа изменения профиля
profileEditButton.addEventListener('click', () => {
  userInfo.getUserInfo();
  validationFormEditUser.checkAllInputValidity();
  validationFormEditUser.toggleButtonState();
  popupEditProfileClass.visualizeLoading('Сохранить');
  popupEditProfileClass.open();
})

//Подключаем слушатели на кнопку открытия Попапа добавления карточки
buttonAddImage.addEventListener('click', () => {
  inputListFormAddButton.forEach(inputElement => validationFormAddImage.hideInputError(inputElement));
  validationFormAddImage.toggleButtonState();
  popupAddImageClass.visualizeLoading('Создать');
  popupAddImageClass.open();
})
//Подключаем слушатели на кнопку открытия Попапа изменения аватара
avatarUpdateButton.addEventListener('click', () => {
  validationFormUpdateAvatar.hideInputError(inputUpdateAvatar);
  validationFormUpdateAvatar.toggleButtonState();
  popupUpdateAvatarClass.visualizeLoading('Сохранить');
  popupUpdateAvatarClass.open();
})
