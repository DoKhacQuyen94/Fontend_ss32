let click = document.getElementsByClassName("btn")[0];
let text = document.getElementsByTagName("span")[0];
let count = 0;
click.addEventListener("click", function () {
  count++;
  text.innerText = count;
});
