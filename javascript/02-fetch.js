console.log('test');

const url = 'https://swapi.dev/api/planets/';

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    data.results.forEach((planet) => {
      console.log(`Planet: ${planet.name} - Population: ${planet.population}`);
    });
  })
  .catch((error) => console.error(error));
