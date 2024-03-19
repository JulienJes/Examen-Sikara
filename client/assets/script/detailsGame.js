import { GameService } from './service/game.service.js';
import { CategoryService } from './service/category.service.js';
import { Game } from './class/game.class.js';

const gameService = new GameService();
const categoryService = new CategoryService();

let name = document.querySelector('#name');
let platform = document.querySelector('#platform');
let categories = document.querySelector('#categories');
let theme = document.querySelector('#theme');
let year = document.querySelector('#year');
let mode = document.querySelector('#mode');
let developer = document.querySelector('#developer');
let publisher = document.querySelector('#publisher');
let title = document.querySelector('#title');

// retrait du hash de l'id de l'URL pour pouvoir requêter l'api via le service GameService
let myId = window.location.hash.substring(1);
let categoryIds

let myGame = gameService.get(myId);
myGame.then((element) => {
    title.innerText = element.name;
    name.value = element.name;
    platform.value = element.platform;
    theme.value = element.theme;
    year.value = element.year;
    mode.value = element.mode;
    developer.value = element.developer;
    publisher.value = element.publisher;

    categoryIds = element.categories;

    // modification du jeu
    let modif = document.querySelector('#modif');
    modif.addEventListener('click', () => {
        let tmp = new Game(name.value, platform.value, categories.value, theme.value, year.value, mode.value, developer.value, publisher.value, element._id,);
        gameService.modif(tmp);
    });
});

/** gestion des categories
* on affiche toutes les catégories pour pouvoir les modifier
* les catégories du jeu sont pré-sélectionnées
*/
document.addEventListener("DOMContentLoaded", function() {
    const categoriesSelect = document.querySelector("#categories");
  
    categoryService.getAll(categoriesSelect)
        .then(categories => {
            categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category._id;
                option.text = category.name;
                categoriesSelect.appendChild(option);
                if (categoryIds.includes(category._id)) {
                    option.selected = true;
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
});