export default class FormValitation {
  constructor(selectorsForm, formElement) {
    this._inputSelector = selectorsForm.inputSelector;
    this._submitButtonSelector = selectorsForm.submitButtonSelector;
    this._inactiveButtonClass = selectorsForm.inactiveButtonClass;
    this._inputErrorClass = selectorsForm.inputErrorClass;
    this._formElement = formElement;
  }
  //Метод установки валидации на форму
  enableValidation = () => {
    this._setEventListeners();
  }
  //Метод установки слушателя добавления валидации
  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this.toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
      })
    })
  }
  //Метод, устанавливающий элементы валидации на инпата
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }
  //Метод, убирающий элементы валидации с инпата
  hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
  //Метод, проверяющий валидность всей формы
  _hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
  }
  //Метод включения и отключения кнопки Сохранить
  toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  //Метод, включающий или выключающий валидацию инпатов, в зависимости от их валидности
  checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }
}
