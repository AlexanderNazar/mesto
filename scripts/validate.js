const formEditUser = document.forms.profile;
const formAddImage = document.forms.add;

const objectValidation = {
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input-text_type_error'
};
//Функция валидирования форм
const enableValidation = (evt) => {
  const currentForm = evt.currentTarget;
  const input = evt.target;
  const submitButton = currentForm.querySelector(objectValidation.submitButtonSelector);

  validateInput(input);
  isValid(input);
  toggleButtonState(currentForm, submitButton, objectValidation.inactiveButtonClass);
}
//Функция, добавляющая стили невалидного Инпата
const showInputError = (element) => {
  element.classList.add(objectValidation.inputErrorClass);
}
//Функция, укаляющая стили невалидного Инпата
const hideInputError = (element) => {
  element.classList.remove(objectValidation.inputErrorClass);
}
//Функция, изменяющая стили Инпатов, в зависимости от её валидности
const isValid = (input) => {
  if (input.checkValidity()) {
    hideInputError(input);
  } else {
    showInputError(input);
  }
}
//Функция изменяющая стили и активность кнопки Сохранить, в зависимости от её валидности
const toggleButtonState = (form, button, classButtonInvalid) => {
  if (form.checkValidity()) {
    button.disabled = false;
    button.classList.remove(classButtonInvalid);
  } else {
    button.disabled = true;
    button.classList.add(classButtonInvalid);
  }
}
//Функция, добавляющая текст ошибки невалидной формы
const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}
//Функция, валидирующая Инпаты формы, при открытии
const validateInitiallyInput = (element) => {
  const inputList = Array.from(element.querySelectorAll(objectValidation.inputSelector));
  inputList.forEach((inputElement) => {
  isValid(inputElement);
  validateInput(inputElement);
  })
};
//Функция закрытия Попапов при нажатии клавиши Escape
const closePopupEscape = (evt, popup) => {
  if (evt.key === "Escape") {
    closePopup(popup);
    document.removeEventListener('keydown', (evt) => closePopupEscape(evt, popup));
  }
}
//Слушатель валидации формы изменения профиля
formEditUser.addEventListener('input', enableValidation);
//Слушатель валидации формы добавления изображения
formAddImage.addEventListener('input', enableValidation);
