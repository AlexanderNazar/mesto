export default class FormValitation {
  constructor(selectorsForm, formElement) {
    this._formElement = formElement;
    this._inputSelector = selectorsForm.inputSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButtonSelector = selectorsForm.submitButtonSelector;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inactiveButtonClass = selectorsForm.inactiveButtonClass;
    this._inputErrorClass = selectorsForm.inputErrorClass;
  }
  //Метод установки валидации на форму
  enableValidation = () => {
    this._setEventListeners();
  }
  //Метод установки слушателя добавления валидации
  _setEventListeners = () => {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
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
  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid)
  }
  //Метод включения и отключения кнопки Сохранить
  toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  //Метод, включающий или выключающий валидацию инпата, в зависимости от его валидности
  checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }
  //Метод, включающий или выключающий валидацию всех инпатов формы, в зависимости от их валидности
  checkAllInputValidity = () => {
    this._inputList.forEach(inputElement => this.checkInputValidity(inputElement));
  }
}
