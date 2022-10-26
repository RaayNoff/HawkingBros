const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  resultsContainer.innerHTML = "";
  const searchValue = searchInput.value.trim().toLowerCase();

  fetch(`https://api.github.com/users/${searchValue}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        throw new Error(res.status);
      }
    })
    .then((res) => res.json())
    .then((data) =>
      resultsContainer.insertAdjacentHTML(
        "afterbegin",
        `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`
      )
    )
    .catch((error) => {
      const alertErrMsg = "Не удалось найти пользователя!\nПричина: ";
      if (Number(error.message) === 404 && searchValue.length === 0) {
        alert(alertErrMsg + "Строка поиска пуста.");
      } else alert(alertErrMsg + `Сервер ответил с кодом ${error.message}`);
    });
});
