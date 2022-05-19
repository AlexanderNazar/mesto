import { profileName, profileProfession} from '../utils/constants.js';

export default class UserInfo {
  constructor({ name, profession }) {
    this._name = name;
    this._profession = profession;
  }
  //Метод передачи данных профиля со страницы в значения Инпатов формы
  getUserInfo = () => {
    this._name.value = profileName.textContent;
    this._profession.value = profileProfession.textContent;
  }
  //Метод передачи значений объекта с данными профиля на страницу
  setUserInfo = ({ name, profession }) => {
    profileName.textContent = name;
    profileProfession.textContent = profession;
  }
}
