# angular-step-by-step

Apprentissage de AngularJS. 

L'idée est d'avancer dans la maîtrise du framework en commençant par la base la plus simple puis d'approfondir chaque point à son tour.

Chaque étape est isolée dans une branche (step01, step02...), toujours en repartant de l'étape précédente.

J'en profite pour expérimenter le modèle de branche master/develop/release : 

- http://nvie.com/posts/a-successful-git-branching-model/
- http://www.croes.org/gerald/blog/git-modele-de-branche-efficace/649/

# Step 01 - Hello World

Cette étape met en place le miniminimorum nécessaire pour faire un Hello World.

## Notions découvertes 

On y découvre déjà les notions de :

- **ng-app**, pour déclarer le point d'entrée de prise en charge par *AngularJS* ;
- **ng-controller**, qui indique quel controlleur utiliser (défini dans la partie script) ;
- **$scope** qui contient, ici, la valeur dynamique à afficher dans la page HTML ;
- expression reconnaissable à ses moustaches '**{{ }}**', qui permet de lire une valeur dans le scope.

## Petite balade dans les entrailles du système

1. Dans *Chrome*, ouvrir la console développeur ;
1. Sélectionner le tag `body` dans l'onglet *Element* ;
1. Dans la console taper : `angular.element($0).scope()` ;

On peut naviguer dans le *Rootscope* de l'application, identifié par le fait que son attibut *parent* est à *null*.

Refaire les mêmes étapes mais en sélectionnant la balise `<div>`.

On a toujours un *scope* mais cette fois il a un parent et surtout, on peut y voir l'attribut `title` défini dans `$scope.title`.

Si on enlève l'attibut `ng-app`, tous les scopes disparaissent.

# Step 02 - Modularize

Cette étape permet d'externaliser le javascript dans un fichier dédié et de commencer à appliquer quelques bonnes pratiques de la programmation Web et AngularJS :

- Javascript en [*'mode strict'*](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode) ;
- Protection du code en l'encapsulant dans une déclaration qui permet de s'assurer qu'il n'entrera pas en conflit avec un autre framework/dépendance :

```javascript
window.angular && (function (angular) {
    ...
})(window.angular);
```

# Step 03 - Routing

- Passage à la version 1.4.8 d'*AngularJS* et ajout de la dépendance au routing. Voir https://code.angularjs.org/ pour toutes les versions d'*AngularJS* ;
- Initialisation de l'arborescence du projet inspirée de https://scotch.io/tutorials/angularjs-best-practices-directory-structure ; 
- Mise en place du routing : la [**directive**](https://docs.angularjs.org/guide/directive) `ng-view` dans *index.html* est remplie avec le contenu du `templateUrl` défini dans le routeur *app-routes.js* en l'associant au `controller` correspondant lorsque dans l'url on tape `http://localhost:8080/index.html#/home`. *AngularJS* "écoute" la barre d'adresse et lorsqu'il détecte le **#** (ancre HTML) il applique les règles du routeur pour afficher la bonne page et manipule l'[historique HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/History_API) pour insérer cette action dans l'historique du navigateur. Le fichier *app-module.js* contient la définition et la configuration de notre module.

En manipulant la console du navigateur on retrouve bien nos scopes parent et celui associé au controlleur.

#Step 04 - Sign in page

Illustration de l'utilisation d'une navigation en mode SPA (Single Page Application). Ajout d'une route et initialisation de l'intégration d'un formulaire.

- Mise en place du routing pour accéder à la page d'authentification (accessible en ajoutant *#/signin* à la fin de l'url);
- Ajout d'une barre de navigation en la formattant avec [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Attention, dans les `href` il faut préfixer les routes par **#** : `<a href="#/signin">Sign In</a>` ;
- Ajout d'un formulaire pour l'authentification : les champs sont mappés sur un `ng-model` contenu dans le controlleur de la page *signinView.html*. 

# Step 05 - Ajax

- Ajout d'un petit serveur *node.js* pour réaliser l'authentification en Ajax via un service REST (dans le répertoire server*), à lancer depuis le répertoire *server* : `node server.js`;
- Déplacement de *index.html* dans *app* (tous les fichiers de l'applications se retrouvent dans *app*) ;

L'appel Ajax s'effectue grâce à `$http.get()` qui retourne une promesse (). La gestion des erreurs est faite avec `catch()` qui permet de gérer les erreurs liées à la `error()` de la promesse `then(success, error)`  mais également aux exceptions générées par le `success()`.

