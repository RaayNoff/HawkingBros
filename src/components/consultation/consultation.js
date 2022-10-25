const btn = document.getElementsByClassName('form__button')[0];
const name = document.getElementById('input-name');
const tel = document.getElementById('input-tel');

const onChangeHandler = (event) => {
  if (name.value.trim() && tel.value.trim()) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', '');
  }
};

const clickHandler = (event) => {
  alert(
    `Спасибо за обращение, ${name.value}!\nМы вам перезвоним на номер: ${tel.value}`
  );
};

name.addEventListener('input', onChangeHandler);
tel.addEventListener('input', onChangeHandler);

btn.addEventListener('click', clickHandler);
