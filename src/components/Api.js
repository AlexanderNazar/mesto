export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  setUserInfo() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: this._headers
      })
      .then(this._handleResponse)
  }

  changeUserInfo(inputValueOject) {
    return fetch(this._baseUrl + `/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(inputValueOject)
    })
    .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(this._baseUrl + `/cards`, {
      headers: this._headers
      })
      .then(this._handleResponse)
  }

  addCard(data) {
    return fetch(this._baseUrl + `/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._handleResponse)
  }

  putLike(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  deleteLike(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  deleteImage(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  updateAvatar(inputValueOject) {
    return fetch(this._baseUrl + `/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(inputValueOject)
    })
    .then(this._handleResponse)
  }
}
