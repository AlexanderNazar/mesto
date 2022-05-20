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

const cardContainer = document.querySelector('.elements');

export { popupEditProfile, popupAddImage, profileName, profileProfession, profileEditButton,
buttonAddImage, buttonSubmitEditProfile, buttonSubmitAddButton, formEditUser, formAddImage, inputListFormProfileEdit, inputListFormAddButton, nameInput, professionInput, cardContainer}
