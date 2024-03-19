import { GameService } from "./service/game.service.js";
import { CategoryService } from "./service/category.service.js"; 
import { Game } from "./class/game.class.js";

const categoryService = new CategoryService();
const gameService = new GameService();

const categoriesSelect = document.querySelector("#categories");
categoriesSelect.setAttribute('multiple', '');

document.addEventListener("DOMContentLoaded", function() {
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
  const theme = document.querySelector('#theme');
  const year = document.querySelector('#year');
  const mode = document.querySelector('#mode');
  const developer = document.querySelector('#developer');
  const publisher = document.querySelector('#publisher');
  
  if(!name.value || !platform.value || !year.value || !developer.value || !publisher.value) {
    alert('Veuillez remplir les champs obligatoires (*)');
    return;
  }
  
  const yearNumber = parseInt(year.value, 10);
  if(!yearNumber || yearNumber < 1900 || yearNumber > 2024) {
    alert('Veuillez saisir une année entre 1900 et 2024');
    return;
  }

  let selectedCategories = Array.from(categoriesSelect.options)
    .filter(option => option.selected)
    .map(option => option.value);
  const newGame = new Game(name.value, platform.value, selectedCategories, theme.value, year.value, mode.value, developer.value, publisher.value);
  
  const promise = gameService.add(newGame);
  promise.then(() => {
    name.value = '';
    platform.value = '';
    selectedCategories.value = [];
    theme.value = '';
    year.value = '';
    mode.value = '';
    developer.value = '';
    publisher.value = '';
  });
});