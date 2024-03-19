import { GameService } from './service/game.service.js';
import { CategoryService } from './service/category.service.js';
import { Game } from './class/game.class.js';

const gameService = new GameService();
const categoryService = new CategoryService();const name = document.querySelector('#name');

const platform = document.querySelector('#platform');
const theme = document.querySelector('#theme');
const year = document.querySelector('#year');
const mode = document.querySelector('#mode');
const developer = document.querySelector('#developer');
const publisher = document.querySelector('#publisher');
const title = document.querySelector('#title');
const categoriesSelect = document.querySelector("#categories");
categoriesSelect.setAttribute('multiple', '');

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
        let selectedCategories = Array.from(categoriesSelect.options)
            .filter(option => option.selected)
            .map(option => option.value);
        let tmp = new Game(name.value, platform.value, selectedCategories, theme.value, year.value, mode.value, developer.value, publisher.value, element._id,);
        gameService.modif(tmp);
    });
});

/** gestion des categories
* on affiche toutes les catégories pour pouvoir les modifier
* les catégories du jeu sont pré-sélectionnées
*/
document.addEventListener("DOMContentLoaded", function() {
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