const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_add-image');

const profileEditButton = document.querySelector('.profile__edit-button');
const buttonAddImage = document.querySelector('.profile__add-button');
const avatarUpdateButton = document.querySelector('.profile__avatar-container')

const formEditUser = document.forms.profile;
const formAddImage = document.forms.add;
const formUpdateAvatar = document.forms.update;

const inputListFormAddButton = Array.from(popupAddImage.querySelectorAll('.popup__input-text'));
const inputUpdateAvatar = formUpdateAvatar.querySelector('.popup__input-text')

const nameInput = popupEditProfile.querySelector('input[name=name]');
const aboutInput = popupEditProfile.querySelector('input[name=about]');

const cardContainer = document.querySelector('.elements');

export { popupEditProfile, popupAddImage, profileEditButton, formUpdateAvatar, inputUpdateAvatar,
buttonAddImage, avatarUpdateButton, formEditUser, formAddImage, inputListFormAddButton, nameInput, aboutInput, cardContainer}
