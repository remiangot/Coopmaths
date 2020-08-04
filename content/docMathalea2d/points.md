---
title: "Les points"
niveau:
description: "MathALEA 2D - Les points"
---



{{% alea2d "points"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

Dans MathALEA2D, créer un point ne le trace pas. 

On commence par définir un point avec ses coordonnées `A = point(x,y)`, on peut faire apparaître la croix qui permet de savoir où est le point avec `tracePoint(A)` puis pour faire apparaitre son nom on rajoute `labelPoint(A)`.

Une première subtilité à bien comprendre c'est qu'un objet MathALEA2D peut être sauvegardé dans une variable informatique mais le nom de la variable... n'est pas forcément le nom du point.


```
A = point(4,5)
tracePoint(A)
labelPoint(A)
```

Avec le script ci-dessus, le point va être tracé mais la commande `labelPoint(A)` qui est censé afficher le nom du point n'aura aucun effet car le nom du point n'est pas le nom de la variable informatique où ce point est sauvegardé. Pour préciser le nom du point, il faut saisir le code suivant : 

```
A = point(4,5,'A')
tracePoint(A)
labelPoint(A)
```

Après les coordonnées du point, il faut ajouter son nom qui peut être n'importe quel texte (vous pouvez très bien faire une figure sur laquelle apparaitront plusieurs point s'appelant A).

La commande complète pour un point est : `A = point(x,y,'A',below')`. 

Le dernier argument sert à préciser la position du nom du point par rapport au point et peut être : left, right, above, below, adove left, above right, below left ou below right.

Voici d'autres commandes possibles pour les points : 

* `tracePoint(A,.5)` // Place une croix de taille 5 mm (en SVG mais en LaTeX la taille ne changera pas) à l'emplacement du point A
* `tracePoint(A,.5,'blue')` // Place une croix bleue de taille 5 mm à l'emplacement du point A
* `tracePoint(A,B,C,D)` // Place une croix pour les différents points 
* `tracePoint([A,B,C,D],'blue')` // Place une croix pour les différents points
* `tracePoint(A,B,C,D,'blue')` // Place une croix pour les différents points
* `labelPoint(A,B,C,D)` // Pour nommer les points A, B, C, D
* `A.positionLabel='left'` // Place le nom à gauche du point (on peut choisir above ou below suivi de left ou right)
* `G = centreGraviteTriangle(A,B,C)` // G est le centre de gravité du triangle ABC
* `H = orthoCentre(A,B,C)` // H est l'orthocentre du triangle ABC
* `O = centreCercleCirconscrit(A,B,C)` // O est le centre du cercle circonscrit au triangle ABC.
* `M = pointSurSegment(A,B,l)` // M est le point de [AB] à l cm de A
* `M = pointSurSegment(A,B,l,'M')` // M est le point de [AB] à l cm de A et se nomme M
* `M = pointSurSegment(A,B,l,'M','below')` // M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
* `M = pointSurSegment(A,B,'','M')` // M est un point au hasard sur [AB] 
* `M = pointSurSegment(A,B)` // M est un point au hasard sur [AB] 
* `M = milieu(A,B)` // M est le milieu de [AB]
* `M = milieu(A,B,'M')` // M est le milieu de [AB] et se nomme M
* `M = milieu(A,B,'M','below')` // M est le milieu de [AB], se nomme M et le nom est en dessous du point
* `M = pointIntersectionDD(d1,d2,'M','below')` // M est le point d'intersection des droites (d1) et (d2)
