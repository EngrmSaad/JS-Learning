setInterval(displayTime, 500);

function displayTime() {
  document.querySelector('#clock').innerHTML = new Date().toLocaleTimeString(); //toTimeString()
}
