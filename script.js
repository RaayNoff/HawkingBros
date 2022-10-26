const input = document.querySelector(".wrapper__input");
const errorField = document.querySelector(".wrapper__errmsg");

const inputChangeHandler = (event) => {
  try {
    const value = event.target.value;
    if (value.length === 0) {
      throw new Error("Вы не ввели значение");
    } else if (value.match(/\D+/gi)) {
      throw new Error("Текстовое содержимое не является числом");
    } else if (value < 5) {
      throw new Error("Значение меньше 5");
    } else if (value > 10) {
      throw new Error("Значение больше 10");
    } else {
      throw new Error("");
    }
  } catch (error) {
    errorField.innerHTML = error.message;
  }
};

input.addEventListener("input", inputChangeHandler);
