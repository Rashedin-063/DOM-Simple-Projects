let sum = 0;
const countValue = document.querySelector('h3');

function updateValue(value) {
  sum += value;
  countValue.innerText = sum;
}

function handleClick() {
  // sum++;
  // countValue.innerText = sum
  updateValue(1);
}

const valueDecrease = (e) => {
  if (countValue.innerText !== '0') {
    // sum--;
    // countValue.innerText = sum;
    updateValue(-1);
}
}



document.getElementById('btn-minus').addEventListener('click', valueDecrease)