import { CategoryService } from "../service/category.service.js";

const categoryService = new CategoryService();
const categoriesList = document.querySelector('#listCategories');

categoryService.getAll(categoriesList);