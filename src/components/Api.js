export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    //this._body = body;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setUserInfo() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: this._headers
      })
      .then(this._handleResponse)
  }

  changeUserInfo(inputValueOject) {
    return fetch(this._baseUrl + `/users/me`, {
      mathod: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(inputValueOject)
    })
    .then(this._handleResponse)
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}
