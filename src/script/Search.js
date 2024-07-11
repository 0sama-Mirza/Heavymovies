const movies = {
  Matrix: "src/pages/matrix.html",
  Dune: "src/pages/Dune.html",
  1917: "src/pages/1917(2021).html",
  "Wonder Women": "https://1337x.to/category-search/Wonder Women/Movies/1/",
  Venom: "src/pages/Venom.html",
  "Casino Royale": "src/pages/casino-royale.html",
  "Captian Marvel": "src/pages/captain-marvel.html",
  "Black Adam": "src/pages/black-adam.html",
  "Black Panter": "src/pages/panther.html",
  "Shang Chi": "src/pages/shang-chi.html",
  "Red Notice": "src/pages/Red Notice (2021).html",
  Eternals: "src/pages/Eternals.html",
  "Planet Earth 2": "src/pages/planet.html",
  "Saving Pirate Ryan": "src/pages/saving-private-rayan.html",
  "Spider Man": "src/pages/Spiderman.html",
  "Batman:Dark Knight Rises": "src/pages/dark-knight.html",
  Gladiator: "src/pages/gladiator.html",
  "Lords Of The Rings":
    "https://1337x.to/category-search/Lords Of The Rings/Movies/1/",
  Interstaller: "src/pages/Interstaller.html",
  "John Wick": "src/pages/john.html",
};

function doit() {
  const ab = document.getElementById("ThisThing").value;
  const url = movies[ab] || `https://1337x.to/category-search/${ab}/Movies/1/`;
  window.open(url);
}
