# hyrule_castle

Hyrule Castle est un petit jeu tour par tour inspiré du Zelda Breath of the Wild développé dans le terminal en Typescript. Le jeu se joue en 10 combats le dernier combat au dernière étage le personnage affronte un boss :
![image](https://user-images.githubusercontent.com/122454763/235700464-549aeb97-0841-46de-a6dd-b99612e8a94d.png)

 
On peut tout d’abord choisir plusieurs personnages pour aller dans la tour chaque personnage à des stats différente et les ennemis aussi qui sont renseigné des les Fichier JSON du code vous pouvez les voir les stats sur : statistiques des personnages 
![image](https://user-images.githubusercontent.com/122454763/235700506-de5df13f-8435-4d31-9cb6-74c0d8891a87.png)


 
Une fois le personnage on se lance dans la bataille le jeu est composé de 10 combats. Nous avons le choix entre Attaquer avec une attaque Magique ou Physique, se soigner le soin restaure la moitié des points de Vie du personnage, se protéger (l’ennemi infligera moins de dégâts que prévu) ou Fuir (ceci tuera le personnage et mettra fin aux jeux. Nous avons également pris en compte la vitesse des ennemis si l’ennemi est plus rapide qu’un autre il attaque en 1er tandis que s’il est plus lent il attaque en dernier.
![image](https://user-images.githubusercontent.com/122454763/235700555-fc17d418-f252-4319-b320-3878580407c5.png)

 
Nous avons pris en compte les stats défensives afin de réduire les dégâts de l’attaque si l’ennemi possède une défense(physique) ou une résistance (Magie) élevé une fois l’attaque réalisé une boucle se met en place et boucle sur notre combat et les choix.
![image](https://user-images.githubusercontent.com/122454763/235700623-4d6ea795-8ce1-4a19-8cf3-53d734725bcb.png)


 
Une fois l’ennemi Vaincu le personnage gagne de l’expérience à partir de 100 points d’expérience gagné le personnage choisi les statistiques du personnage évolue (sont multiplié par 1.3)
![image](https://user-images.githubusercontent.com/122454763/235700662-9081f84e-ad42-41b5-a9e6-d6060f591af3.png)

 
Nous avons également décider de mettre des coups critiques dans le jeu qui se font en fonction de la stats chances des personnages et des ennemis un nombre aléatoire est à chaque attaque un nombre aléatoire est généré aux niveaux du backend si ce nombre est inférieur à la stat de Luck le coup critique est réalisé et les dégâts sont doublées   
![image](https://user-images.githubusercontent.com/122454763/235700713-91110bdb-c5df-474d-80d5-0714569de1d6.png)
![image](https://user-images.githubusercontent.com/122454763/235700786-8e342f64-9a23-4daf-b6cb-f010e689070f.png)

Voici l’interface du combat final et le résultat de la partie si le personnage remporte le château s’il meurt ou s’échappe un message s’affiche disant que le personnage est mort 


