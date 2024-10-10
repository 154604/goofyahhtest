console.warn("js file link");

function index() {
  window.location.href = "/index.html";
}
function index2() {
  window.location.href = "/index2.html";
}
function index3() {
  window.location.href = "/index3.html";
}
function index4() {
  window.location.href = "/index4.html";
}
function access() {
  window.location.href = "/access.html";
}

function checkCookie() {
  let username = getCookie("sstate");
  if (sstate != "1") {
    window.location.href = "/access.html";
  } else {
    username = prompt("Please enter your name:", "");
    if (sstate != "" && username != null) {
    window.location.href = "/index.html";
    }
  }
}
