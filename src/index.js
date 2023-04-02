import "./styles/main.sass";
import todosData from "./fixtures/tododata.json";
import todoItem from "./components/todoItem.pug";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("js-list");
  const elementUl = document.createElement("ul");

  if (todosData && Array.isArray(todosData)) {
    for (let todo of todosData) {
      elementUl.insertAdjacentHTML("beforeend", todoItem({ todo }));
    }
  }

  list.append(elementUl);

  for (let item of document.querySelectorAll(".item__label")) {
    item.addEventListener("click", (e) => {
      e.target.closest("div").classList.toggle("item__text_completed");
    });
  }
});
