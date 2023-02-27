import {
    chosen
} from "../function/choose";

export function xpGain() {
    let min = 15;
    let max = 50;
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`${chosen[0].name} gagne ${random} points d'XP`)
    chosen[0].actualxp = chosen[0].actualxp + random
    console.log(chosen[0].actualxp, "/", chosen[0].maxxp)

    if (chosen[0].actualxp >= chosen[0].maxxp) {
        console.log(`Level UP`)
        chosen[0].maxhp = Math.floor(chosen[0].maxhp * 1.4)
        chosen[0].mp = Math.floor(chosen[0].mp * 1.4)
        chosen[0].str = Math.floor(chosen[0].str * 1.5)
        chosen[0].def = Math.floor(chosen[0].def * 1.5)
        chosen[0].res = Math.floor(chosen[0].res * 1.5)
        chosen[0].spd = Math.floor(chosen[0].spd * 1.5)
        chosen[0].actualxp = 0
    }
}