# Installation

Cloner le repository sur votre environnement local.
A la racine du projet, dans le terminal, utiliser la commande `npm i`.

# Lancer le projet
A la racine du projet, dans le terminal, utiliser la commande `npm start`.

# Particularité du projet
Celui-ci propose deux models au lieu d'un avec une relation basique entre les deux.
En effet un jeu vidéo peut avoir plusieurs catégories et le front permet d'afficher des jeux par catégories.
Le tout en se basant sur l'id de ces dernières comme référence dans la collection Game.
La logique derrière l'affichage d'un nom de catégorie est donc plus complexe que dans le cours lorsque l'on navigue dans la liste générale des jeux ainsi que dans leur page détails respectives.
Pour y remédier, javascript propose une fonction intégrée : `Promise.all()`, qui permet de gérer plusieurs promesses simultanéments en lui passant un itérable (un tableau, en l'occurence) en paramètre.