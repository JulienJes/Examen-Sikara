import { CategoryService } from "./service/category.service.js";
import { Category } from "./class/category.class.js";

let btnNew = document.querySelector('#newcategory');
let categoryService = new CategoryService();

btnNew.addEventListener('click', () => {
  let name = document.querySelector('#name');
  let description = document.querySelector('#description');

  let newCategory = new Category(name.value, description.value);
  
  let promise = categoryService.add(newCategory);
  promise.then(() => {
    name.value = '';
    description.value = '';
  });
});