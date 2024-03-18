import { GameService } from "./service/game.service.js";
import { CategoryService } from "./service/category.service.js"; 
import { Game } from "./class/game.class.js";

const categoryService = new CategoryService();
const gameService = new GameService();

document.addEventListener("DOMContentLoaded", function() {
  const categoriesSelect = document.querySelector("#categories");

  categoryService.getAll(categoriesSelect)
      .then(categories => {
          categories.forEach(category => {
              const option = document.createElement("option");
              option.value = category._id;
              option.text = category.name;
              categoriesSelect.appendChild(option);
          });
      })
      .catch(error => {
          console.error(error);
      });
});

const btnNew = document.querySelector('#newgame');

btnNew.addEventListener('click', () => {
  const name = document.querySelector('#name');
  const platform = document.querySelector('#platform');
  const categories = document.querySelector('#categories');
  const theme = document.querySelector('#theme');
  const year = document.querySelector('#year');
  const mode = document.querySelector('#mode');
  const developer = document.querySelector('#developer');
  const publisher = document.querySelector('#publisher');


  const newGame = new Game(name.value, platform.value, categories.value, theme.value, year.value, mode.value, developer.value, publisher.value);
  
  const promise = gameService.add(newGame);
  promise.then(() => {
    name.value = '';
    platform.value = '';
    categories.value = '';
    theme.value = '';
    year.value = '';
    mode.value = '';
    developer.value = '';
    publisher.value = '';
  });
});