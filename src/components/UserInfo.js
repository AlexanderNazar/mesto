import { profileName, profileAbout} from '../utils/constants.js';

export default class UserInfo {
  constructor(data) {
    this._name = data.name;
    this._about = data.about;
  }
  //Метод передачи данных профиля со страницы в значения Инпатов формы
  /*getUserInfo = () => {
    this._name.value = profileName.textContent;
    this._about.value = profileAbout.textContent;
  }*/
  //Метод передачи значений объекта с данными профиля на страницу
  setUserInfo = () => {
    profileName.textContent = this._name;
    profileAbout.textContent = this._about;
  }
}
