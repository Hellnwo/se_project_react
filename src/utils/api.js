const baseUrl = 'http://localhost:3001';

function checkResponse(res) {
return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
    return fetch(`${baseUrl}/items`).then(checkResponse);
}

function postCard({ name, weather, imageUrl }) {
    return fetch(`${baseUrl}/items`, {method: "POST", body: JSON.stringify({name, weather, imageUrl}), headers: {
      "Content-Type": "application/json"}}).then(checkResponse);
  }

function deleteCard(id) {
    return fetch(`${baseUrl}/items/${id}`, {method: "DELETE"}).then(checkResponse);
  }

export { getItems, postCard, deleteCard };