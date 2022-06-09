(()=>{"use strict";var e=document.querySelector(".popup_type_profile"),t=document.querySelector(".popup_type_add-image"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__avatar-container"),i=document.forms.profile,a=document.forms.add,u=document.forms.update,c=Array.from(t.querySelectorAll(".popup__input-text")),l=u.querySelector(".popup__input-text"),s=e.querySelector("input[name=name]"),f=e.querySelector("input[name=about]"),p=document.querySelector(".elements"),h={cardTemplate:"#element-template",cardContent:".element",cardTitle:".element__title",cardImage:".element__image",cardHeart:".element__heart",cardHeartActive:"element__heart_active",cardButtonDelete:".element__delete",cardCounterLike:".element__heart-counter"},d={inputSelector:".popup__input-text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_invalid",inputErrorClass:"popup__input-text_type_error"};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r,o){var i,a,u=this,c=o.changeLikePosition,l=o.handleHideElement,s=o.handleCardClick,f=o.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(e){u._cardCounterLikeElement.textContent=e.likes.length,u.isLiked()?u._likeButton.classList.remove(u._cardHeartActive):u._likeButton.classList.add(u._cardHeartActive),u._likes=e.likes},(i="turnLikeButton")in this?Object.defineProperty(this,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[i]=a,this._card=t,this._name=t.name,this._link=t.link,this._cardTemplate=n.cardTemplate,this._cardContent=n.cardContent,this._cardTitle=n.cardTitle,this._cardImage=n.cardImage,this._cardHeart=n.cardHeart,this._cardHeartActive=n.cardHeartActive,this._cardButtonDelete=n.cardButtonDelete,this._cardCounterLike=n.cardCounterLike,this._myId=r,this._ownerId=t.owner._id,this._likes=t.likes,this._functionOpenCard=s,this._functionOpenPopupConfirm=f,this._functionHideElement=l,this._functionChangeLikePosition=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(this._cardContent).cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardCounterLikeElement=this._element.querySelector(this._cardCounterLike),this._setLikeEventListener(),this._setDeleteImageEventListener(),this._setOpenPreviewImageEventListener(),this._titleImage=this._element.querySelector(this._cardTitle),this._titleImage.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardCounterLikeElement.textContent=this._likes.length,this._myId!==this._ownerId&&this._functionHideElement(this._deleteButton),this.isLiked()&&this._likeButton.classList.add(this._cardHeartActive),this._element}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._myId})))}},{key:"_setLikeEventListener",value:function(){var e=this;this._likeButton=this._element.querySelector(this._cardHeart),this._likeButton.addEventListener("click",(function(){return e._functionChangeLikePosition(e._card)}))}},{key:"deleteImage",value:function(){this._element.remove()}},{key:"_setDeleteImageEventListener",value:function(){var e=this;this._deleteButton=this._element.querySelector(this._cardButtonDelete),this._deleteButton.addEventListener("click",(function(){return e._functionOpenPopupConfirm()}))}},{key:"_setOpenPreviewImageEventListener",value:function(){var e=this;this._cardImage=this._element.querySelector(this._cardImage),this._cardImage.addEventListener("click",(function(){return e._functionOpenCard()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=v((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"enableValidation",(function(){r._setEventListeners()})),b(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r.checkInputValidity(e),r.toggleButtonState()}))}))})),b(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t})),b(this,"hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.textContent=""})),b(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),b(this,"toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),b(this,"checkInputValidity",(function(e){e.validity.valid?r.hideInputError(e):r._showInputError(e,e.validationMessage)})),b(this,"checkAllInputValidity",(function(){r._inputList.forEach((function(e){return r.checkInputValidity(e)}))})),this._formElement=n,this._inputSelector=t.inputSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButtonSelector=t.submitButtonSelector,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass}));function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=E((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"renderItems",(function(e){r._initialCards=e,r._initialCards.forEach((function(e){return r._container.append(r._renderer(e))}))})),k(this,"addItem",(function(e){r._container.prepend(r._renderer(e))})),this._renderer=o,this._container=n}));function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function j(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(r){var o=R(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j(this,e)});function i(e){var t,n,r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e){B((t=I(n),R(i.prototype)),"open",t).call(t),n._imageOpenTitle.textContent=e.name,n._imageOpenLink.src=e.link,n._imageOpenLink.alt=e.name},(a="open")in(r=I(n=o.call(this,e)))?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r.open=u,n._imageOpenTitle=n._popup.querySelector(".popup__image-title"),n._imageOpenLink=n._popup.querySelector(".popup__open-image"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(S);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function z(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e,t){var n,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._inputList=Array.from(n._popup.querySelectorAll(".popup__input-text")),n._form=n._popup.querySelector(".popup__form"),n._submitForm=r,n._submitButton=n._form.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"close",value:function(){U(V(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"visualizeLoading",value:function(e){this._submitButton.textContent="".concat(e)}},{key:"setEventListeners",value:function(){var e=this;U(V(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=$(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function $(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function K(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(e,t){var n,r=e.deleteCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._buttonDelete=n._popup.querySelector(".popup__save-button"),n._form=n._popup.querySelector(".popup__form"),n._deleteCard=r,n._submitButton=n._form.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"visualizeLoading",value:function(e){this._submitButton.textContent="".concat(e)}},{key:"setEventListeners",value:function(){var e=this;M(Q(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCard()}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t,n){return t&&X(e.prototype,t),n&&X(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=Y((function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"getUserInfo",(function(){s.value=n._profileName.textContent,f.value=n._profileAbout.textContent})),Z(this,"setUserInfo",(function(e){n._profileName.textContent=e.name,n._profileAbout.textContent=e.about})),Z(this,"updateAvatar",(function(e){n._avatar.src=e.avatar})),this._profile=document.querySelector(t),this._profileName=this._profile.querySelector(".profile__name"),this._profileAbout=this._profile.querySelector(".profile__about"),this._avatar=this._profile.querySelector(".profile__avatar")}));function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"setUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then(this._handleResponse)}},{key:"changeUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"changeLikePosition",value:function(e,t){return fetch(this._baseUrl+"/cards/".concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"deleteImage",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"updateAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}}])&&te(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var oe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,n;return t=e,(n=[{key:"hideElement",value:function(){this._item.style.display="none"}}])&&re(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae,ue=new ne({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"ed73c6b7-f907-48aa-a72e-ee4df672ba1b","Content-Type":"application/json"}}),ce=new ee(".profile");Promise.all([ue.setUserInfo(),ue.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ce.updateAvatar(o),ce.setUserInfo(o),ae=o._id,le.renderItems(i)})).catch((function(e){return console.log(e)}));var le=new O({renderer:function(e){var t=new y(e,h,ae,{changeLikePosition:function(e){ue.changeLikePosition(e._id,!t.isLiked()).then((function(e){return t.turnLikeButton(e)})).catch((function(e){return console.log(e)}))},handleHideElement:function(e){return new oe(e).hideElement()},handleCardClick:function(){var t=new q(".popup_type_preview");t.open(e),t.setEventListeners()},handleDeleteClick:function(){var n=new W({deleteCard:function(){ue.deleteImage(e._id).then((function(e){t.deleteImage(),n.close()})).catch((function(e){return console.log(e)})).finally(n.visualizeLoading("Удаление..."))}},".popup_type_confirm");n.visualizeLoading("Да"),n.setEventListeners(),n.open()}});return t.generateCard()}},p),se=new g(d,i),fe=new g(d,a),pe=new g(d,u);se.enableValidation(),fe.enableValidation(),pe.enableValidation();var he=new N({submitForm:function(e){ue.changeUserInfo(e).then((function(e){ce.setUserInfo(e),he.close()})).catch((function(e){return console.log(e)})).finally(he.visualizeLoading("Сохранение..."))}},".popup_type_profile"),de=new N({submitForm:function(e){ue.addCard(e).then((function(e){le.addItem(e),de.close()})).catch((function(e){return console.log(e)})).finally(de.visualizeLoading("Сохранение..."))}},".popup_type_add-image"),_e=new N({submitForm:function(e){ue.updateAvatar(e).then((function(e){ce.updateAvatar(e),_e.close()})).catch((function(e){return console.log(e)})).finally(_e.visualizeLoading("Сохранение..."))}},".popup_type_update-avatar");he.setEventListeners(),de.setEventListeners(),_e.setEventListeners(),n.addEventListener("click",(function(){ce.getUserInfo(),se.checkAllInputValidity(),se.toggleButtonState(),he.visualizeLoading("Сохранить"),he.open()})),r.addEventListener("click",(function(){c.forEach((function(e){return fe.hideInputError(e)})),fe.toggleButtonState(),de.visualizeLoading("Создать"),de.open()})),o.addEventListener("click",(function(){pe.hideInputError(l),pe.toggleButtonState(),_e.visualizeLoading("Сохранить"),_e.open()}))})();
//# sourceMappingURL=main.js.map