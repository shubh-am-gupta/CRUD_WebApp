const addbutton = document.querySelector(".addbutton");
const container = document.querySelector(".container");
var movie_name = document.querySelector(".movie_name");
var release_date = document.querySelector(".release_date");
var rating = document.querySelector(".rating");
const logout = document.querySelector(".logout");

class item {
  constructor(item1, item2, item3) {
    this.creatediv(item1, item2, item3);
  }
  creatediv(item1, item2, item3) {
    const moviesTable = document.getElementById("movies-table");

    const movieRow = document.createElement("tr");

    moviesTable.appendChild(movieRow);

    // movie_name entry
    let movie_name = document.createElement("input");
    movie_name.value = item1;
    movie_name.disabled = true;
    movie_name.classList.add("iteminput");
    movie_name.type = "text";

    // release_date entry
    let release_date = document.createElement("input");
    release_date.value = item2;
    release_date.disabled = true;
    release_date.classList.add("iteminput");
    release_date.type = "text";

    // rating entry
    let rating = document.createElement("input");
    rating.value = item3;
    rating.disabled = true;
    rating.classList.add("iteminput");
    rating.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editbutton = document.createElement("button");
    editbutton.innerHTML = "EDIT";
    editbutton.classList.add("editbutton");

    let rembutton = document.createElement("button");
    rembutton.innerHTML = "DELETE";
    rembutton.classList.add("rembutton");

    movieRow.appendChild(movie_name);
    movieRow.appendChild(release_date);
    movieRow.appendChild(rating);
    const buttonWrapper = document.createElement("span");

    buttonWrapper.appendChild(editbutton);
    buttonWrapper.appendChild(rembutton);

    movieRow.appendChild(buttonWrapper);

    editbutton.addEventListener("click", () =>
      this.edit(movie_name, release_date, rating)
    );
    // editbutton.addEventListener("click", () => this.edit(release_date));
    // editbutton.addEventListener("click", () => this.edit(rating));
    rembutton.addEventListener("click", () =>
      moviesTable.removeChild(movieRow)
    );
  }
  edit(movie_name, release_date, rating) {
    movie_name.disabled = !movie_name.disabled;
    release_date.disabled = !release_date.disabled;
    rating.disabled = !rating.disabled;
  }
  remove(item) {
    container.removeChild(item);
  }
}
function check() {
  if (
    movie_name.value != "" &&
    release_date.value != "" &&
    rating.value != ""
  ) {
    new item(movie_name.value, release_date.value, rating.value);
    movie_name.value = "";
    release_date.value = "";
    rating.value = "";
  } else {
    alert("Please enter all fields to add any movie");
  }
}
addbutton.addEventListener("click", check);
