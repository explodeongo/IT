let button = document.querySelector('input');
button.addEventListener('click', changeCell);

function changeCell() {
  let row = window.prompt('enter row: ') - 1 ;
  let column = window.prompt('enter column: ') - 1;
  let newValue = window.prompt('enter new value');
  document.querySelectorAll('tr')[row].children[column].textContent = newValue;
}

