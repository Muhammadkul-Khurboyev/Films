
var elSiteList = document.querySelector(".js-film-list");

for (var item of films) {

  var newItem = document.createElement("li");

  var newFilmYear = document.createElement("span");

  var newFilmImg = document.createElement("img");

  var newFilmTitle = document.createElement("h3");

  var newFilmGenre = document.createElement("p");

  var date = new Date(item.release_date);

  newFilmYear.textContent = date.getFullYear();

  newFilmImg.src = item.poster;
  newFilmImg.alt = item.title + " film";

  newFilmTitle.textContent = item.title;

  newFilmGenre.textContent = item.genres.join(" ");

  newFilmYear.style.position = "absolute";
  newFilmYear.style.top = "0px";
  newFilmYear.style.left = "0px";
  newFilmYear.style.borderRadius = "10px";
  newFilmYear.style.padding = "4px";
  newFilmYear.style.backgroundColor = "red";

  newItem.style.width = "300px";
  newItem.style.height = "450px";
  newItem.style.padding = "10px";
  newItem.style.border = "1px solid #fff";
  newItem.style.borderRadius = "10px";
  newItem.style.display = "flex";
  newItem.style.flexDirection = "column";
  newItem.style.alignItems = "center";
  newItem.style.justifyContent = "center";
  newItem.style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;";
  newItem.style.position = "relative";



  newFilmImg.style.height = "280px";

  newFilmTitle.style.textAlign = "center";
  newFilmTitle.style.color = "#fff";
  newFilmTitle.style.marginTop = "10px";
  newFilmTitle.style.padding = "10px";
  newFilmTitle.style.borderWidth = "1px";
  newFilmTitle.style.borderColor = "yellow";
  newFilmTitle.style.borderRadius = "10px";
  newFilmTitle.style.fontWeight = "500";

  newFilmGenre.style.textAlign = "center";
  newFilmGenre.style.color = "white";
  newFilmGenre.style.marginTop = "15px";
  newFilmGenre.style.fontWeight = "400"

  newItem.append(newFilmYear, newFilmImg, newFilmTitle, newFilmGenre);

  elSiteList.appendChild(newItem);
}