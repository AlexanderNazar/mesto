//Функция, устанавливающая элементы валидации на инпата
const showInputError = (inputErrorClass, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};
//Функция, убирающая элементы валидации с инпата
const hideInputError = (inputErrorClass, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};
//Функция, проверяющая валидность всей формы
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
};
//Функция включения и тключения кнопки Сохранить
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
}
};
//Функция, включающая или выключающая валидацию инпатов, в зависимости от их валидности
const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(inputErrorClass, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputErrorClass, formElement, inputElement);
  }
};
//Функция, навешивающая обработчики событий на все инпаты форм
const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};
//Функция валидации всех форм
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass});
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input-text_type_error'
});
