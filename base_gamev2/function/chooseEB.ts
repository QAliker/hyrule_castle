import {
    chosen
} from "./choose";
import {
    finalStage,
    stage
} from "./fight";

const fs = require('fs');
let rawdata = fs.readFileSync("../JSON/ennemies.json", "utf8");
let bossData = fs.readFileSync("../JSON/boss.json", "utf8");


let ennemies = JSON.parse(rawdata);
let boss = JSON.parse(bossData);

export let chosenEnnemies: any[] = [];

export function chooseRandomEnnemies() {
    if (chosenEnnemies.length === 0) {
        const randomIndex = Math.floor(Math.random() * ennemies.length)
        console.log("\n");
        console.log("Nouveau Ennemi " + ennemies[randomIndex].name);
        const oneEnnemie = chosenEnnemies.push(ennemies[randomIndex])
    }
}

export function finalDeleteEnnemi() {
    if (stage === 10 && chosenEnnemies[0].hp <= 0) {
        chosenEnnemies.length = 0
        return
    }
}

export function deleteEnnemi() {
    chosenEnnemies.length = 0
}




export let chosenBoss: any[] = [];

export function chooseRandomBoss() {
    const randomIndex = Math.floor(Math.random() * boss.length)
    console.log("BOSS FINAL " + boss[randomIndex].name);
    const oneEnnemie = chosenBoss.push(boss[randomIndex])
}

export function deleteBoss() {
    chosenBoss.length = 0
    console.log(chosenBoss)
}