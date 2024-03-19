import { CategoryService } from './service/category.service.js';
import { Category } from './class/category.class.js';

const categoryService = new CategoryService();

const name = document.querySelector('#name');
const description = document.querySelector('#description');
const title = document.querySelector('#title');

// retrait du hash de l'id de l'URL pour pouvoir requêter l'api via le service CategoryService
let myId = window.location.hash.substring(1);

let myCategory = categoryService.get(myId);
myCategory.then((element) => {
    console.log("🚀 ~ myCategory.then ~ element:", element)
    title.innerText = element.name;
    name.value = element.name;
    description.value = element.description;

    // modification du jeu
    let modif = document.querySelector('#modif');
    modif.addEventListener('click', () => {
        let tmp = new Category(name.value, description.value, element._id);
        console.log("🚀 ~ modif.addEventListener ~ tmp:", tmp)
        categoryService.modif(tmp);
    });
});