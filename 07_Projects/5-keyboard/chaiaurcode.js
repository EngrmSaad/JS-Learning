console.log('Project 5');

addEventListener('keydown', function (e) {
  document.querySelector('#insert').innerHTML = `You Pressed: ${e.key} Key`;
  console.log(e.key);
});
