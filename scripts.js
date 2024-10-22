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

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
