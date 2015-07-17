const host = 'http://localhost:7777';
const path = 'locations';
const api_url = `${host}/${path}`;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// api: responsible for interacting with the api
// and sending back promises and formatting data, pulling
// from the response

var LocationsFetcher = {

  fetch: function () {
    return new Promise(function (resolve) {
      return fetch(api_url)
        .then((response) => {return response.json(); }) // retrieve, parse as JSON
        .then(resolve); // send back as json
    });
  },

  delete: function (id) {
    return new Promise((resolve) => {
      return fetch(`${api_url}/${id}`, {
        method: 'delete',
        headers
      }).then(resolve);
    });
  },

  add: function (name) {
    return new Promise((resolve) => {
      var newLocation = {
        name,
        id: Date.now(),
        is_favorite: false
      };

      var post_body = JSON.stringify(newLocation);

      return fetch(api_url, {
        method: 'post',
        headers,
        body: post_body
      })
        .then((response) => {return response.json(); }) // retrieve, parse as JSON
        .then(resolve); // send back as json
    });
  }

};

export default LocationsFetcher;
