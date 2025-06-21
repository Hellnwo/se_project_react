const baseUrl = 'http://localhost:3001';

function getItems() {
    return fetch(`${baseUrl}/items`).then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
}

function postCard({ name, weather, imageUrl }) {
    return fetch(`${baseUrl}/items`, {method: "POST", body: JSON.stringify({name, weather, imageUrl}), headers: {
      "Content-Type": "application/json"}}).then((res) => {
     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

function deleteCard(id) {
    return fetch(`${baseUrl}/items/${id}`, {method: "DELETE"}).then((res) => {
     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

export { getItems, postCard, deleteCard };