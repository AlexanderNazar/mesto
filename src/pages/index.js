import './index.css';
import { profileEditButton, buttonAddImage, avatarUpdateButton, formEditUser, formUpdateAvatar,
  formAddImage, inputUpdateAvatar, inputListFormAddButton, cardContainer } from '../utils/constants.js';
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

const userInfo = new UserInfo('.profile');

Promise.all([ api.setUserInfo(), api.getInitialCards()])
  .then(([ data, cards ]) => {
    userInfo.updateAvatar(data);
    userInfo.setUserInfo(data);
    userId = data._id;
    renderCards.renderItems(cards);
  })
  .catch(err => console.log(err))

  const popupConfirm = new PopupWithConfirm('.popup_type_confirm');

  const renderCards = new Section({
  renderer: (item) => {
    const card = new Card(item, selectorsCard, userId, {
      changeLikePosition: (item) => {
        api.changeLikePosition(item._id, !card.isLiked())
        .then(data => card.turnLikeButton(data))
        .catch(err => console.log(err))
      },
      handleCardClick: () => {
        const imagePreview = new PopupWithImage('.popup_type_preview');
        imagePreview.open(item);
        imagePreview.setEventListeners();
      },
      handleDeleteClick: (item) => {
        console.log(item._card._id)
        popupConfirm.visualizeLoading('Да');
        popupConfirm.setSubmitHanlder(() => {
          api.deleteImage(item._card._id)
            .then((res) => {
              popupConfirm.close();
              item.deleteImage();
            })
            .catch((res) => {
              console.log(res);
            })
            .finally(popupConfirm.visualizeLoading('Удаление...'));
        });
        popupConfirm.open();
      }
    });
    const cardElement = card.generateCard();
    return cardElement;
  }},
  cardContainer
);

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
      .then(data => {
        userInfo.setUserInfo(data);
        popupEditProfileClass.close()
      })
      .catch(err => console.log(err))
      .finally(popupEditProfileClass.visualizeLoading('Сохранение...'))
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
        userInfo.updateAvatar(data)
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
popupConfirm.setEventListeners();

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
