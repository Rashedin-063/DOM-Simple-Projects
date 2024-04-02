let sum = 0;
const countValue = document.getElementById('count-value');

function updateCount(value) {
  sum += value;
  countValue.innerText = sum;
}

function handleClick() {
  // sum++;
  // countValue.innerText = sum;
  updateCount(1)
}

document.getElementById('btn-minus').addEventListener('click', function () {
  if (countValue.innerText !== '0') {
    // sum--;
    // countValue.innerText = sum;
    updateCount(-1);
  }
})