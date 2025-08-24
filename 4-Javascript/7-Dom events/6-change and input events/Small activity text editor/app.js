let input = document.querySelector("#text");
let p = document.querySelector("p");
input.addEventListener("input", function () {
  p.innerText = input.value;
});
