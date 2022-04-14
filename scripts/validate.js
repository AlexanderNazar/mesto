const formEditUser = document.forms.profile;
const formAddImage = document.forms.add;

const objectValidation = {
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input-text_type_error'
};

const enableValidation = (evt) => {
  const currentForm = evt.currentTarget;
  const input = evt.target;
  const submitButton = currentForm.querySelector(objectValidation.submitButtonSelector);

  validateInput(input);
  isValid(input);
  toggleButtonState(currentForm, submitButton, objectValidation.inactiveButtonClass);
}

const isValid = (input) => {
  if (input.checkValidity()) {
    hideInputError(input);
  } else {
    showInputError(input);
  }
}

const toggleButtonState = (form, button, classButtonInvalid) => {
  if (form.checkValidity()) {
    button.disabled = false;
    button.classList.remove(classButtonInvalid);
  } else {
    button.disabled = true;
    button.classList.add(classButtonInvalid);
  }
}

const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}

const showInputError = (element) => {
  element.classList.add(objectValidation.inputErrorClass);
}

const hideInputError = (element) => {
  element.classList.remove(objectValidation.inputErrorClass);
}

const validateInitiallyInput = (element) => {
  const inputList = Array.from(element.querySelectorAll(objectValidation.inputSelector));
  inputList.forEach((inputElement) => {
  isValid(inputElement);
  validateInput(inputElement);
  })
};

const closePopupEscape = (evt, popup) => {
  if (evt.key === "Escape") {
    closePopup(popup);
    document.removeEventListener('keydown', (evt) => closePopupEscape(evt, popup));
  }
}

/*profileEditButton.addEventListener('click', () => {
  //nameInput.value = profileName.textContent;
  //professionInput.value = profileProfession.textContent;
  validateInitiallyInput(formEditUser);
  toggleButtonState(formEditUser, formEditUser.elements.submit, objectValidation.inactiveButtonClass);
  //openPopup(popupEditProfile);
  document.addEventListener('keydown', (evt) => closePopupEscape(evt, popupEditProfile));
});

buttonAddImage.addEventListener('click', () => {
  toggleButtonState(formAddImage, formAddImage.elements.submit, objectValidation.inactiveButtonClass);
  //openPopup(popupAddImage);
  document.addEventListener('keydown', (evt) => closePopupEscape(evt, popupAddImage));
});*/

formEditUser.addEventListener('input', enableValidation);
formAddImage.addEventListener('input', enableValidation);

/////////////////////////////

