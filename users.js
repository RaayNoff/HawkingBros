const printContainer = document.querySelector(".js-results");
const callbackbtn = document.querySelector(".js-load");

const usersRequestHandler = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("Данные о пользователях: ", response.data);
    const users = response.data;

    users.forEach((data) => {
      console.log(data);
      printContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="response-container">
		 <p> Имя: <span>${data.name}</span><p>
		 <p> Никнейм: <span>${data.username}</span><p>
		 <p> Город: <span>${data.address.city}</span><p>
		 <p> Email: <span>${data.email}</span><p>
		 <p> Сайт: <span>${data.website}</span><p>
		 <p> Телефон: <span>${data.phone}</span><p>
		 </div>`
      );
    });
  } catch (error) {
    alert("Произошла ошибка при запросе данных о пользователях");
  }
};

callbackbtn.addEventListener("click", usersRequestHandler);
