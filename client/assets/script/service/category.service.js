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
        let myHeaders = new Headers();
        let url = '/api/category';
        let options = {
        method: 'GET',
        headers: myHeaders
        };

        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((response) => {
                response.forEach(element => {
                let myCategory = document.createElement('tr');

                let myTitle = document.createElement('td');
                myTitle.innerText = element.name;

                let myModif = document.createElement('td');
                let myIcone = document.createElement('i');
                myIcone.classList.add('fas','fa-light', 'fa-circle-info');
                let myLinkToDetails = document.createElement('a');
                myLinkToDetails.href = `/public/details/detailsCategory.html#${element._id}`;
                myLinkToDetails.appendChild(myIcone);
                myModif.appendChild(myLinkToDetails);
                myModif.style.textAlign = 'center';

                let myDelete = document.createElement('td');
                let btnDelete = document.createElement('button');
                let myIcone2 = document.createElement('i');
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
        let myHeaders = new Headers();
        let url = `/api/category/${id}`;
        let options = {
            method: 'GET',
            headers: myHeaders
        };
      
        return fetch(url, options)
            .then((res) => {
                if(res.ok) {
                return res.json();
                }
            })
            .then((resource) => {
                let tmp = new Category(resource.nom, resource.genre, resource.pays, resource.date, resource.synopsis, resource._id);
                return tmp;
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }

    /**
     * Modifie le categorie passé en paramètre
     * @param {String} Category 
     */
    modif(Category) {
        console.log(Category)
        let url = `/api/category/${Category._id}`;
        let options = {
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
            .then((res) => {
                if(res.ok) {
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
        let url = '/api/category';
        let options = {
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
        .then((res) => {
            if(res.ok) {
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
        let url = `/api/category/${id}`;
        let myHeaders = new Headers();
        let options = {
        method : 'DELETE', 
        headers: myHeaders
        };

        return fetch(url, options)
        .then((res) => {
            if(res.ok) {
            console.log('Réussi');
            location.reload();
            }
        })
        .catch((error) => {
            console.log(`Error : ${error}`);
        });
    }
}
