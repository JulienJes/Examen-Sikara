import { Category } from "../class/category.class.js";

export class CategoryService {
    constructor() {
    }

    /**
     * Récupère l'ensemble des données et les ajoutent dans le DOM
     * @param {DOM} target - localisation dans le dom
     * @return {Array<Category>}
     */
    getAll(target) {
        const myHeaders = new Headers();
        const url = '/api/category';
        const options = {
        method: 'GET',
        headers: myHeaders
        };

        return fetch(url, options)
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                console.log("🚀 ~ CategoryService ~ .then ~ response:", response)
                response.forEach(element => {
                const myCategory = document.createElement('tr');

                const myTitle = document.createElement('td');
                myTitle.innerText = element.name;
                const myDescription = document.createElement('td');
                myDescription.innerText = element.description;

                const myModif = document.createElement('td');
                const myIcone = document.createElement('i');
                myIcone.classList.add('fas','fa-light', 'fa-circle-info');
                const myLinkToDetails = document.createElement('a');
                myLinkToDetails.href = `/public/details/detailsCategory.html#${element._id}`;
                myLinkToDetails.appendChild(myIcone);
                myModif.appendChild(myLinkToDetails);
                myModif.style.textAlign = 'center';

                const myDelete = document.createElement('td');
                const btnDelete = document.createElement('button');
                const myIcone2 = document.createElement('i');
                myIcone2.classList.add('fas', 'fa-light', 'fa-trash')
                btnDelete.classList.add('btn', 'btn-outline-danger');
                myDelete.style.textAlign = 'center';
                myDelete.appendChild(btnDelete);
                btnDelete.appendChild(myIcone2);
                btnDelete.addEventListener('click', () => {
                    this.remove(element._id);
                });

                target.appendChild(myCategory);
                myCategory.appendChild(myTitle);
                myCategory.appendChild(myDescription);
                myCategory.appendChild(myModif);
                myCategory.appendChild(myDelete);
                });

                return response;
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }
    
    /**
     * Renvoie le categorie correspondant à l'identifiant
     * @param {String} id - _id du categorie concerné
     * @return {Category}
    */
    get(id) {
        const myHeaders = new Headers();
        const url = `/api/category/${id}`;
        const options = {
            method: 'GET',
            headers: myHeaders
        };
      
        return fetch(url, options)
            .then((response) => {
                if(response.ok) {
                return response.json();
                }
            })
            .then((resource) => {
                const tmp = new Category(resource.name, resource.description, resource._id);
                console.log("🚀 ~ CategoryService ~ .then ~ tmp:", tmp)
                return tmp;
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }

    /**
     * Modifie le categorie passé en paramètre
     * @param {String} category 
     */
    modif(category) {
        console.log(category)
        const url = `/api/category/${category._id}`;
        const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(category)
        };

        return fetch(url, options)
            .then((response) => {
                if(response.ok) {
                console.log('reussi')
                }
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }

    /**
     * Ajoute un novueau Category à la collection
     * @param {Category} Category 
     */
    add(Category) {
        const url = '/api/category';
        const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(Category)
        };

        return fetch(url, options)
        .then((response) => {
            if(response.ok) {
            console.log('reussi');
            }
        })
        .catch((error) => {
            console.log(`Error : ${error}`);
        });
    }

    /**
     * Suppression d'un categorie d'identifiant id
     * @param {String} id - identifiant du categorie 
     */
    remove(id) {
        const url = `/api/category/${id}`;
        const myHeaders = new Headers();
        const options = {
        method : 'DELETE', 
        headers: myHeaders
        };

        return fetch(url, options)
        .then((response) => {
            if(response.ok) {
            console.log('Réussi');
            location.reload();
            }
        })
        .catch((error) => {
            console.log(`Error : ${error}`);
        });
    }
}
