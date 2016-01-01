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
- expression reconnaissable à ses moustaches **{{ }}**, qui permet de lire une valeur dans le scope.

## Petite balade dans les entrailles du système

1. Dans *Chrome*, ouvrir la console développeur ;
1. Sélectionner le tag `body` dans l'onglet *Element* ;
1. Dans la console taper : `angular.element($0).scope()` ;

On peut naviguer dans le *Rootscope* de l'application, identifié par le fait que son attibut *parent* est à *null*.

Refaire les mêmes étapes mais en sélectionnant la balise `<div>`.

On a toujours un *scope* mais cette fois il a un parent et surtout, on peut y voir l'attribut `title` défini dans `$scope.title`.

Si on enlève l'attibut `ng-app`, tous les scopes disparaissent.
