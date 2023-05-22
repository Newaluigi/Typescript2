# Typescript2
WCS EXERCISE [Installation et types basiques] 

## 💪Challenge

Le but est de corriger les erreurs TypeScript et de rendre le code fonctionnel.

Créé le fichier challenge.ts et copie le contenu ci-dessous.

```
// challenge.ts

const prettyPrintWilder = (users) => {

  users.map((user) => {

    console.log(`${user.name} is ${user.age} years old`);

  });

};


const wilders = [];

const user1 = { name: "Pierre", age: 23 };

const user2 = { name: "Paul", birthday: "10/02/1990" };

const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);

wilders.push(user2);

wilders.push(user3);

prettyPrintWilder(wilders);
```

Pour typer correctement ce code tu vas devoir:
* Déclarer une interface User avec des propriétés typées
* Déclarer des types pour le paramètre et le retour de la fonction prettyPrintWilder
* Typer wilders
* Adapter user2 pour qu'il n'affiche plus d'erreur

Créé un gist sur github avec ton code typé et soumet l'url comme solution à ce challenge.

### 🧐 Critères d'acceptation

⭙ Le fichier comporte une interface ou un type décrivant User

⭙ La fonction prettyPrintWilder est correctement typée

⭙ La constante wilders est correctement typée
