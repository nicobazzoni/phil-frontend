var taskAdd = "afterbegin";

function fetchTasks() {
  var xhttp = new XMLHttpRequest();   //turn this into fdettch !!!!!
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Add the json stuff
      let container = document.getElementById("container");
      let responses = JSON.parse(this.responseText);

      for (var i = 0; i < responses.length; i++) {
        container.insertAdjacentHTML(
          taskAdd,
          createResponse(responses[i])
        );
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/todos", true);
  xhttp.send();
}

window.sendForm = function (event) {
  event.preventDefault();
  var xhttp = new this.XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/todos", true);
  xhttp.onload = function (event) {
    let container = document.getElementById("container");
    let response = JSON.parse(event.target.response);

    container.insertAdjacentHTML(
      taskAdd,
      createResponse(response)
    );
  };
  var formData = new this.FormData(document.getElementById("todo_form"));
  xhttp.send(formData);
  document.getElementById("task_input").value = "";
};

function createResponse(response) {
  return (
    `<div class="task" id="${response.id}" onclick="deleteResponse('${response.id}')">` +
    "[" +
    response.id +
    "]: " +
    response.task +
    "<br />" +
    "</div>"
  );
}
function deleteResponse(response_id) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", `http://localhost:3000/todos/${response_id}`, true);
  xhttp.onload = function () {
    let target = document.getElementById(response_id);
    target.parentNode.removeChild(target);
  };
  xhttp.send(null);
}
fetchTasks();