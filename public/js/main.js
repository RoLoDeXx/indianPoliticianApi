let form = document.getElementById("searchForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  let query = document.getElementById("searchQuery");
  location.replace(`/politicians/search?searchFeild=${query.value}`);
});
