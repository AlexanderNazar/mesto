import './index.css';
import { profileEditButton, buttonAddImage, formEditUser,
  formAddImage, inputListFormAddButton, nameInput, professionInput, cardContainer} from '../utils/constants.js';
import { initialCards } from '../utils/initialCards.js';
import { selectorsCard } from '../utils/cardConfig.js';
import { selectorsForm } from '../utils/validationConfig.js';
import Card from '../components/Card.js';
import FormValitation from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, selectorsCard, {
      handleCardClick: () => {
        const imagePreview = new PopupWithImage ('.popup_type_preview');
        imagePreview.open(item);
        imagePreview.setEventListeners();
      }
    });
    const cardElement = card.generateCard();
    return cardElement;
  }},
  cardContainer
)
//Отрисовываем карточки из массива на страницу
renderCards.renderItems();

const userInfo = new UserInfo({
  name: nameInput,
  profession: professionInput
})

const validationFormEditUser = new FormValitation(selectorsForm, formEditUser);
const validationFormAddImage = new FormValitation(selectorsForm, formAddImage);
//Подключаем валидацию к формам
validationFormEditUser.enableValidation();
validationFormAddImage.enableValidation();

const popupEditProfileClass = new PopupWithForm({
  submitForm: (inputValueOject) => {
    userInfo.setUserInfo(inputValueOject);
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
//Подключаем слушатели на Попапы с формами
popupEditProfileClass.setEventListeners();
popupAddImageClass.setEventListeners();
//Подключаем слушатели на кнопку открытия Попапа изменения профиля
profileEditButton.addEventListener('click', () => {
  userInfo.getUserInfo();
  validationFormEditUser.checkAllInputValidity();
  validationFormEditUser.toggleButtonState();
  popupEditProfileClass.open();
})
//Подключаем слушатели на кнопку открытия Попапа изменения профиля
buttonAddImage.addEventListener('click', () => {
  inputListFormAddButton.forEach(inputElement => validationFormAddImage.hideInputError(inputElement));
  validationFormAddImage.toggleButtonState();
  popupAddImageClass.open();
})
