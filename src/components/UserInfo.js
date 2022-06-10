import { nameInput, aboutInput} from '../utils/constants.js';

export default class UserInfo {
  constructor(profile) {
    this._profile = document.querySelector(profile);
    this._profileName = this._profile.querySelector('.profile__name');
    this._profileAbout = this._profile.querySelector('.profile__about');
    this._avatar = this._profile.querySelector('.profile__avatar');
  }
  //Метод получения значений профиля в поля ввода
  getUserInfo = () => {
    nameInput.value = this._profileName.textContent;
    aboutInput.value = this._profileAbout.textContent;
  }
  //Метод передачи значений объекта с данными профиля на страницу
  setUserInfo = (data) => {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
  }
  //Метод изменения аватара
  updateAvatar = (data) => {
    this._avatar.src = data.avatar;
    this._avatar.alt = data.name;
  }
}
