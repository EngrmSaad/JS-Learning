const randomColor = () => {
  const Hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let a = Math.round(Math.random() * 15);
    // console.log(a);
    color += Hex[a];
  }
  // console.log(color);
  return color;
};

function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

let interval;

// console.log(document.querySelector('#start'));

document.querySelector('#start').addEventListener('click', function () {
  if (!interval) interval = setInterval(changeBackgroundColor, 500);
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(interval);
});
