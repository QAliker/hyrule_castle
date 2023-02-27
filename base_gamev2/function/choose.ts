import {
  oneturn
} from "../main";

const fs = require('fs');
const readlineSync = require('readline-sync')

let rawdata = fs.readFileSync("../JSON/players.json", "utf8");

let players = JSON.parse(rawdata)

export let chosen: any[] = [];

export function chooseCharacter() {
  const choice = [players[0].name, players[1].name, players[2].name, players[3].name, players[4].name],
    index = readlineSync.keyInSelect(choice, 'Veuillez Choisir un personnage');
  if (index === -1) {
    console.log("Personnage choisi aléatoirement")
    const one = chosen.push(players[Math.floor(Math.random() * players.length - 1)])
    console.log(`Personnage choisi ${chosen[0].name}`)
  }
  if (chosen.length === 1) {
    return
  }
  console.log('Personnage choisi ' + choice[index]);
  if (choice[index] === players[0].name) {
    const one = chosen.push(players[0])

  } else if (choice[index] === players[1].name) {
    const one = chosen.push(players[1])

  } else if (choice[index] === players[2].name) {
    const one = chosen.push(players[2])

  } else if (choice[index] === players[3].name) {
    const one = chosen.push(players[3])

  } else if (choice[index] === players[4].name) {
    const one = chosen.push(players[4])

  }
}

chooseCharacter()