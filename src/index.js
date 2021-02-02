import movieGenres from "./genres.js"

let imgBaseUrl = "https://image.tmdb.org/t/p/w200";
let imgSrc = "";
let posters = "";

const getPoster = () => {
  return fetch(movieGenres.animationNfx)
    .then(response => response.json())
    .then(json => json.results)
}

getPoster().then(moviesList => {
  console.log(moviesList);
  for (let movie of moviesList) {
    imgSrc = imgBaseUrl + movie.poster_path;

    posters += `
      <img src="${imgSrc}">
    `;
  }
  document.getElementById("root").innerHTML = posters;
})