import { Game } from "../class/game.class.js";

export class GameService {
    constructor() {
    }

    /**
     * Récupère l'ensemble des données et les ajoutent dans le DOM
     * @param {DOM} target - localisation dans le dom
     * @return {Array<Game>}
     */
    getAll(target) {
        let myHeaders = new Headers();
        let url = '/api/game';
        let options = {
        method: 'GET',
        headers: myHeaders
        };

        fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((response) => {
                response.forEach(element => {
                let myGame = document.createElement('tr');

                let myTitle = document.createElement('td');
                myTitle.innerText = element.name;
                let myPlatforms = document.createElement('td');
                myPlatforms.innerText = element.platform;
                let myYear = document.createElement('td');
                myYear.innerText = element.year;

                let myModif = document.createElement('td');
                let myIcone = document.createElement('i');
                myIcone.classList.add('fas','fa-light', 'fa-circle-info');
                let myLinkToDetails = document.createElement('a');
                myLinkToDetails.href = `/public/details/detailsGame.html#${element._id}`;
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

                target.appendChild(myGame);
                myGame.appendChild(myTitle);
                myGame.appendChild(myPlatforms);
                myGame.appendChild(myYear);
                myGame.appendChild(myModif);
                myGame.appendChild(myDelete);
                });
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }
    
    /**
     * Renvoie le jeu correspondant à l'identifiant
     * @param {String} id - _id du jeu concerné
     * @return {Game}
    */
    get(id) {
        let myHeaders = new Headers();
        let url = `/api/game/${id}`;
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
                let tmp = new Game(resource.name, resource.platform, resource.categories, resource.theme, resource.year, resource.mode, resource.developer, resource.publisher, resource._id);
                return tmp;
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }

    /**
     * Modifie le jeu passé en paramètre
     * @param {String} game 
     */
    modif(game) {
        console.log(game)
        let url = `/api/game/${game._id}`;
        let options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(game)
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
     * Ajoute un novueau game à la collection
     * @param {Game} game 
     */
    add(game) {
        let url = '/api/game';
        let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(game)
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
     * Suppression d'un jeu d'identifiant id
     * @param {String} id - identifiant du jeu 
     */
    remove(id) {
        let url = `/api/game/${id}`;
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
