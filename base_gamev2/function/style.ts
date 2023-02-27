import * as figlet from "figlet"


/*class Character {
  name: string;
  hp: number;
  maxhp: number;

  constructor(name: string, hp: number, maxhp: number) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
  }
}

class Ennemi {
  name: string;
  hp: number;
  maxhp: number;

  constructor(name: string, hp: number, maxhp: number) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
  }
}

class Boss {
  name: string;
  hp: number;
  maxhp: number;

  constructor(name: string, hp: number, maxhp: number) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
  }
}

let chosen = [new Character("personnage", 100, 100)];
let chosenEnnemies = [new Ennemi("ennemi", 55, 55)];
let chosenBoss = [new Boss("boss", 420, 420)];

function displayHealthBar(character: Character, ennemi: Ennemi, boss: Boss) {
  let barLength = 20;
  let filledBar = Math.floor((character.hp / character.maxhp) * barLength);
  let ennemiFilledBar = Math.floor((ennemi.hp / ennemi.maxhp) * barLength);
  let bossFilledBar = Math.floor((boss.hp / boss.maxhp) * barLength);
  let emptyBar = barLength - filledBar;
  let ennemiEmpty = barLength - ennemiFilledBar;
  let bossEmpty = barLength - bossFilledBar;
  console.log(
    character.name + " " + "💚".repeat(filledBar) + " ".repeat(emptyBar) + " " + character.hp + "/" + character.maxhp + "\n",
    ennemi.name + " " + "💙".repeat(ennemiFilledBar) + " ".repeat(emptyBar) + " " + ennemi.hp + "/" + ennemi.maxhp + "\n",
    boss.name + " " + "🖤".repeat(bossFilledBar) + " ".repeat(emptyBar) + " " + boss.hp + "/" + boss.maxhp
  );
}

chosen.forEach(character => {
  chosenEnnemies.forEach(ennemi => {
    chosenBoss.forEach(boss => {
      displayHealthBar(character, ennemi, boss);
    });
  });
});*/

//ASCII de Fin
export function endASCII() {
figlet.text('THANKS FOR PLAYING !!', function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data)
});
}

