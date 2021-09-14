$(document).ready(function(){
    document.getElementById("form-send-response").style.display = "none";
    document.getElementById("form-send-response-negative").style.display = "none";
});


var form = document.getElementById("project_form");
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  });
}
