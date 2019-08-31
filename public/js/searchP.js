let searchP = document.getElementById("searchBtn");
searchP.addEventListener("click", e => {
  e.preventDefault();
  let query = document.getElementById("searchPolitician");
  location.replace("/politicians/" + query.value);
});
