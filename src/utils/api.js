const baseUrl = 'http://localhost:3001';

const headers = () => ({
  "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
  "Content-Type": "application/json"
});

function checkResponse(res) {
return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers(),
  }).then(checkResponse)
}

function postCard({ name, weather, imageUrl }) {
    return fetch(`${baseUrl}/items`, 
      {method: "POST", 
      body: JSON.stringify({name, weather, imageUrl}), 
      headers: headers(),
    }).then(checkResponse);
  }

function addCard(card) {
  return fetch( `${baseUrl}/items`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(card)
  }).then(checkResponse)
}

function deleteCard(id) {
    return fetch(`${baseUrl}/items/${id}`, 
      {method: "DELETE",
        headers: headers(),
    }).then(checkResponse);
  }

  function addCardLike(itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: headers(),
  }).then(checkResponse)
}

function removeCardLike(itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: headers(),
  }).then(checkResponse)
}

function getUserData() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: headers(),
  }).then(checkResponse)
}

function updateUserInfo(user) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(user)
  }).then(checkResponse)
}

export { getItems, postCard, addCard, deleteCard, addCardLike, removeCardLike, getUserData, updateUserInfo };