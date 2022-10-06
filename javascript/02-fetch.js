const url = 'https://swapi.dev/api/planets/';

let getData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.next !== null && getData(data.next);
      return data.results;
    })
    .then((planets) => {
      planets.forEach((planet) => {
        console.log(
          `Planet: ${planet.name} - Population: ${planet.population}`
        );
      });
    })
    .catch((error) => console.error(error));
};

getData(url);
