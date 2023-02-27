//revoir la healthbar du boss y a trop de coeur pour ler terminal
// on doit choisir le persos 2 fois



const readlineSync = require('readline-sync');
import {
  oneturn
} from "../main";
import {
  finalReadlineMods,
  ReadlineMods
} from "../mods/better_combat_options";
import {
  xpGain
} from "../mods/level_and_experience";
import {
  chosen
} from "./choose";
import {
  chosenEnnemies,
  chosenBoss,
  chooseRandomEnnemies,
  chooseRandomBoss,
  deleteBoss,
  finalDeleteEnnemi,
  deleteEnnemi
} from "./chooseEB";



chosen;

chosenEnnemies;

chosenBoss;



export let stage = 1
export function title() {
  console.log(`--- COMBAT ${stage} ---`);
}


let currentTurn = 1
export function turn() {
  console.log(`     TOUR ${currentTurn}`)
  currentTurn++;

}


export function healthBar() {
  let barLength = 20;
  let filledBar = Math.floor((chosen[0].hp / chosen[0].maxhp) * barLength);
  let ennemiFilledBar = Math.floor((chosenEnnemies[0].hp / chosenEnnemies[0].maxhp) * barLength);
  let emptyBar = barLength - filledBar;
  let ennemiEmpty = barLength - ennemiFilledBar;
  console.log(
    chosen[0].name + " " + "💚".repeat(filledBar) + " ".repeat(emptyBar) + " " + chosen[0].hp + "/" + chosen[0].maxhp + "             " +
    chosenEnnemies[0].name + " " + "💙".repeat(ennemiFilledBar) + " ".repeat(emptyBar) + " " + chosenEnnemies[0].hp + "/" + chosenEnnemies[0].maxhp + "\n",
  );
}

chosen.forEach(() => {
  chosenEnnemies.forEach(() => {
    healthBar();
  });
});


export function readlineAttackAndHeal() {
  const choice = ['ATTAQUER', 'SE SOIGNER'],
    index = readlineSync.keyInSelect(choice, 'QUE DOIS-JE FAIRE?');
  console.log(`${chosen[0].name} choisi ` + choice[index]);
  if (choice[index] == "ATTAQUER") {
    let newhp = chosenEnnemies[0].hp - chosen[0].str
    chosenEnnemies[0].hp = newhp
    console.log(`${chosen[0].name} inflige ${chosen[0].str} de dégats`)

  } else if (choice[index] == "SE SOIGNER") {
    let newHP = chosen[0].maxhp / 2 + chosen[0].hp
    chosen[0].hp = newHP
    if (chosen[0].hp > chosen[0].maxhp) {
      chosen[0].hp = chosen[0].maxhp
    }
    console.log(`${chosen[0].name} possède ${chosen[0].hp} points de vie`);
  } else {
    console.log(`${chosen[0].name} est un flemmard et n'a rien envie de faire`);
  }
}

export function readlineRepeat() {
  while (stage > 10 || chosen[0].hp >= 0 || chosenEnnemies[0].hp >= 0) {
    if (chosenEnnemies[0].hp <= 0) {
      break
    }

    if (chosen[0].hp <= 0) {
      console.log("\n")
      console.log(`${chosen[0].name} est mort`)
      break
    }
    console.log("\n");
    title();
    turn();
    console.log("\n");
    healthBar();
    ReadlineMods();
    console.log("\n");


  }
}


export function newstage() {
  if (chosenEnnemies[0].hp <= 0) {
    xpGain()
    deleteEnnemi()
    chooseRandomEnnemies()
    chosenEnnemies[0].hp = chosenEnnemies[0].maxhp
    console.log("\n")
    console.log(`${chosen[0].name} accède à un nouvel étage`);
    stage++;
    currentTurn = 1
    if (stage < 10) {
      oneturn();
    } else {
      finalStage()
    }
  }
}


//Final Round

export function finalLifeline() {
  if (chosenBoss[0].hp > 0) {
    let barLength = 20;
    let filledBar = Math.floor((chosen[0].hp / chosen[0].maxhp) * barLength);
    let ennemiFilledBar = Math.floor((chosenEnnemies[0].hp / chosenEnnemies[0].maxhp) * barLength);
    let emptyBar = barLength - filledBar;
    let ennemiEmpty = barLength - ennemiFilledBar;
    console.log(
      chosen[0].name + " " + "💚".repeat(filledBar) + " ".repeat(emptyBar) + " " + chosen[0].hp + "/" + chosen[0].maxhp + "             " +
      chosenBoss[0].name + " " + "🖤".repeat(ennemiFilledBar) + " ".repeat(emptyBar) + " " + chosenBoss[0].hp + "/" + chosenBoss[0].maxhp + "\n",
    );
  } else
    return
}

chosen.forEach(() => {
  chosenBoss.forEach(() => {
    finalLifeline();
  });
});


export function finalReadlineAttackAndHeal() {
  const choice = ['ATTAQUER', 'SE SOIGNER'],
    index = readlineSync.keyInSelect(choice, 'QUE DOIS-JE FAIRE?');
  console.log(`${chosen[0].name} choisi ` + choice[index]);
  if (choice[index] == "ATTAQUER") {
    let newhp = chosenBoss[0].hp - chosen[0].str
    chosenBoss[0].hp = newhp
    console.log(`${chosen[0].name} inflige ${chosen[0].str} de dégats`)

  } else if (choice[index] == "SE SOIGNER") {
    let newHP = chosen[0].maxhp / 2 + chosen[0].hp
    chosen[0].hp = newHP
    if (chosen[0].hp > chosen[0].maxhp) {
      chosen[0].hp = chosen[0].maxhp
    }
    console.log(`${chosen[0].name} possède ${chosen[0].hp} points de vie`);
  } else {
    console.log(`${chosen[0].name} est un flemmard et n'a rien envie de faire`);
  }
}

export function finalReadlineRepeat() {
  while (chosen[0].hp >= 0 || chosenBoss[0].hp >= 0) {

    if (chosenBoss[0].hp <= 0) {
      console.log(`BRAVO ${chosen[0].name}, ${chosenBoss[0].name} est Vaincu`);
      console.log("VOUS AVEZ ZNCORE UNE FOIS SAUVEZ ZELDA")
      console.log("\n")
      break;

    } else if (chosen[0].hp <= 0) {
      console.log("\n")
      console.log(`${chosen[0].name} est mort si près du but`)
      break

    } else {
      console.log("\n")
      finalTitle()
      turn();
      console.log("\n")
      finalLifeline();
      finalReadlineMods();
      console.log("\n")
    }
  }
}


export function finalTitle() {
  console.log(`--- COMBAT FINAL ---`);
}


export function finalStage() {

  chooseRandomBoss()
  currentTurn = 1;
  finalReadlineRepeat();
}