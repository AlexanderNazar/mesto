import { profileName, profileAbout, nameInput, aboutInput} from '../utils/constants.js';

export default class UserInfo {
  //Метод получения значений профиля в поля ввода
  getUserInfo = () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
  }
  //Метод передачи значений объекта с данными профиля на страницу
  setUserInfo = (data) => {
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
  }
}
