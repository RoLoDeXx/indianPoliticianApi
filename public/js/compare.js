let form = document.getElementById("compareForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  let query1 = document.getElementById("sel1").value;
  let query2 = document.getElementById("sel2").value;

  if (query1 === query2) alert("Select two different politicians");
  else location.replace(`/politicians/compare/${query1}/${query2}`);
});
