let classeCoding19 = [];

let ajouter = (prenom, phrase) => {
    classeCoding19.push(prenom);
    console.log(phrase);
    console.log(classeCoding19);
}

let retirer = (prenom, phrase, nbr) => {
    classeCoding19.splice(classeCoding19.indexOf(prenom), nbr)
    console.log(phrase);
    console.log(classeCoding19);
}

ajouter("Fanny", "il est 8h43, Fanny rentre en classe");

ajouter("Chris", "8h44 Chris rentre, allume son pc et met a jour ces notes");

ajouter("Nasila, Stan, Mouna, Jean", "8h45 Nasila Stan Mouna et Jean rejoignent la classe");
retirer("Stan", "8h51 Stan et Jean voyent Django le chat passer devant la porte, et decident de le rejoindre et de ne jamais revenir", 2);

ajouter("Ali, Agim", "8h55 Ali et Agim rentrent en classe en fesant un maximum de bruit");

ajouter("Antoine", "8h56 Antoine rentre en classe");
retirer("Antoine", "8h56 Antoine redescant pour prendre sont café");

ajouter("Yassin", "8h59 Yassin arrive avec sa petite plante, et salue tout le monde avec un grand sourire");

ajouter("Seifedin, Haroune", "9h00 Seifedin et Haroune rentrent tranquillement et observe tout le monde");

ajouter("Elvis, Ilias.D, Ilias.E", "9h03 Elvis, Ilias.D et Ilias.E rentrent et observe Nasila qui a l'air detre tranquille");

ajouter("Kevin", "9h04 Kevin rentre avec une tasse de café");

ajouter("Van hoa, Nathan", "9h05 Van hoa et Nathan rentrent en classe tous contents de n'etre que 5 minute en retard, Fanny leur dit qu'ils sont en retard puis elle sort");

retirer("Fanny", "Fanny sort apres avoir dit a Van hoa et Nathan qu'ils etaient en retard");

ajouter("Adil", "9h10 Adil rentre avec sa petite tasse de café, tout content et souriant");

ajouter("Fanny", "9h20 Fanny rentre en classe et commence a donné cours");

ajouter("Lira", "9h30 Lira rentre en faisant un minimum de bruit possible mais toute la classe le regarde")







CORRECTION 
let classeCoding19 = [];

let ajouter = (prenom, phrase) => {

    //je split ma chaine de caractères à chaque fois que je trouve une , et mets chaque éléments dans mon tableau tabTemp
    let tabTemp = prenom.split(',');   // tabTemp = ["Nasila", "Mouna", "Stan", "Jean"] 
    
    for(let i = 0; i < tabTemp.length; i++){
        classeCoding19.push(tabTemp[i]);
    }
    console.log(phrase);
    console.log(classeCoding19);

}

let retirer = (prenom, phrase, nbr) => {
    classeCoding19.splice(classeCoding19.indexOf(prenom), nbr);
    console.log(phrase);
    console.log(classeCoding19);
}

ajouter("Fanny", "Il est 08h43, Fanny entre en classe !");

ajouter("Chris", "Il est 08h44, Chris rentre, allume son PC et commence à mettre ses notes à jour");

ajouter("Nasila, Mouna, Stan, Jean", "Nasila, Mouna, Stan, Jean rejoignent la classe à 08h45");

retirer("Stan", "Stan et Jean voient Django le chat passer devant la porte, et décident de le rejoindre et de ne jamais revenir !", 2);

ajouter("Ali, Agim", "A 08h55, Ali et Agim rentrent en classe en faisant un max de bruit !")

ajouter("Antoine", "Antoine rentre en classe à 08h56");
retirer("Antoine", "Antoine descend prendre sa tasse de café",1);

ajouter("Yassine", "A 08h59, Yassine arrive avec sa petite plante et salue tout le monde avec un grand sourire !");

ajouter("Seifedin, Haroune", "Seifedin et Haroune rentrent tranquillement et observent tout le monde à 09h00.")

ajouter("Elvis, Ilias E., Ilias D.", "A 09h03 Elvis, Ilias D et Ilias E. arrivent et observent Nasila qui a l'air d'être traaaaanquiiiille");

ajouter("Kevin", "A 09h04, Kevin rentre avec sa tasse de café");

ajouter("VanHoa, Nathan", "VanHoa et Nathan rentrent en classe tout contents de n'être que 5min en retard")

retirer("Fanny", "Fanny leur dit qu'ils sont en retard puis elle sort", 1);

ajouter("Adil", "Adil rentre à 09h10 avec son café, tout content et souriant !");

ajouter("Fanny", "Fanny rentre en classe et commence à donner cours");

ajouter("Lira", "A 09h30 Lira rentre en faisant le minimum de bruit possible mais toute la classe le regarde !");