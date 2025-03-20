let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {
  let value = document.getElementById("mon_hoc").value;
  if (value === "") {
    alert("Tên môn học không được để trống");
  } else {
    let parent = document.getElementsByClassName("list")[0];
    let add = `
  <li>${value}</li>
  `;
    parent.innerHTML += add;
  }
});
