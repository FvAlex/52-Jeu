# examenproject

## Project setup

```
npm install

```

### Explication

- Utiliser vue2, typescript, router, traduction, store, test unitaire
- API Rest sous format JsonServer

- Création d'une application Web (jeu) de gladiateur qui s'affronte :
  - Les lanistes ( proprio d'ecole de gladiateur ) possedent :
    - Un ou plusieurs Ludi ( ecole de gladiateur ) qui possedent une spécialité :
      - Course de char
      - Lutte
      - Atlétisme
    - Les Ludis entrainent les gladiateurs. Pour definir leur niveau on leur donne une jauge sur chaque talent ( entre 0 et 10 ) sur les talents suivants :
      - Adresse
      - Force
      - Equilibre
      - Vitesse
      - Stratégie
    - Lors de sa naissance il se voit attribuer des niveaux entre 0 et 3 aléatoirement
    - Le joueur possede un Ludi dont il choisit sa spécialité et 10 deniers:
      - Les actions que le joueur peut faire sont les suivantes :
        - Recruter un nouveau gladiateur ( doit debourser 5 deniers, limiter a 10 gladiateurs)
        - entrainer ses gladiateur ( entrainement : physique, tactique, combiné )
          - Spécialité :
            - Course de Char :
              - Physique : 2 - 4
              - Tactique : 3 - 6
              - Combiné : 2 - 7
            - Tactique :
              - Physique : 3 - 6
              - Tactique : 1 - 3
              - Combiné : 1 - 5
            - Combiné :
              - Physique : 3 -5
              - Tactique : 2 - 3
              - Combiné : 3 - 9
          - Jauge Global :
            - Adresse = adresse existante + 0.4 \* PJ
            - Equilibre = equilibre existante + 0.1 \* PJ
            - Force = force existante + 0.3 \* PJ
            - Vitesse = vitesse existante + 0.5 \* PJ
            - Stratégie = stratégie existante + 0.2 \* PJ
    - Utilisateur :
      - Création de compte :
        - Choisir Nom, configurer son premier Ludi
      - Login : user et mdp, rediraction vers son Ludi
      - Pages :
        - Recruter Gladiateur
        - Entrainement
