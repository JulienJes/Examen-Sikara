# Installation

Cloner le repository sur votre environnement local.
A la racine du projet, dans le terminal, utiliser la commande `npm i`.

# Configurez la BDD
Pour choisir entre une BDD distante ou local, commentez/décommentez les lignes 4 & 5 de index.js à la racine du projet à votre convenance.
Note: la BDD distante a déjà quelques données.

# Lancer le projet
A la racine du projet, dans le terminal, utiliser la commande `npm start`.

# Particularité du projet
Celui-ci propose deux models au lieu d'un avec une relation basique entre les deux.
En effet un jeu vidéo peut avoir plusieurs catégories et le front permet d'afficher des jeux par catégories.
Le tout en se basant sur l'id de ces dernières comme référence dans la collection Game.
La logique derrière l'affichage d'un nom de catégorie est donc plus complexe que dans le cours lorsque l'on navigue dans la liste générale des jeux ainsi que dans leur page détails respectives.