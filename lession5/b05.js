let service = [];
let add = document.getElementsByClassName("add")[0];
let ul = document.getElementById("taskList");

add.addEventListener("click", function () {
  let value = document.getElementById("taskInput").value;
  if (value === "") {
    alert("Ô dữ liệu có gì đâu mà m bấm");
  } else {
    let newService = {
      id: Math.random(),
      task: value,
    };
    service.push(newService);
    display();
  }
});

function display() {
  ul.innerHTML = "";
  for (let i in service) {
    let newli = `
    <li>${service[i].task}
    <div>
    <span class="close">&#x2715;</span>
    </div>
    </li>
  `;
    ul.innerHTML += newli;
  }
  let close = document.getElementsByClassName("close");
  for (let i in service) {
    close[i].onclick = function () {
      let id = +close[i].parentElement.id;
      let findIndex = -1;
      for (let index in service) {
        if (id === service[index].id) {
          findIndex = index;
          break;
        }
      }
      service.splice(findIndex, 1);
      display();
    };
  }
}
