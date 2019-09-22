const ENDPOINT = 'https://randomuser.me/api/?results=50';

function getData() {
  return fetch(ENDPOINT)
    .then((response) => response.json());
}

export { getData };
