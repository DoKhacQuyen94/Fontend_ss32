let size = 40;

document.getElementById("cong").addEventListener("click", function () {
  const text = document.getElementById("text");
  size += 4;
  text.style.fontSize = String(size) + "px";
});

document.getElementById("tru").onclick = () => {
  const text = document.getElementById("text");
  size -= 4;
  text.style.fontSize = String(size) + "px";
};
