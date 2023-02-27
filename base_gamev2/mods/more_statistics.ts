import {
    chosen
} from "../function/choose";
import {
    chosenEnnemies,
    chosenBoss
} from "../function/chooseEB";
import {
    oneturn
} from "../main";
import {
    ennemiesAttack,
    bossAttack
} from "./better_combat_options";


export function physicalDamage() {
    const attack = Math.floor(chosen[0].str - chosen[0].str * (chosenEnnemies[0].def / 100));
    let luck = chosen[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        let crit = attack * 2
        console.log(`${chosen[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosenEnnemies[0].hp - crit
        chosenEnnemies[0].hp = newhp
    } else {
        console.log(`${chosen[0].name} Inflige ${attack} dégats avec son attaque physique`)
        let newhp = chosenEnnemies[0].hp - attack
        chosenEnnemies[0].hp = newhp
    }

}

export function magicDamage() {
    const attack = Math.floor(chosen[0].mp - chosen[0].mp * (chosenEnnemies[0].res / 100));
    let luck = chosen[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosen[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosenEnnemies[0].hp - crit
        chosenEnnemies[0].hp = newhp
    } else {
        console.log(`${chosen[0].name} Inflige ${attack} dégats avec son attaque magique`)
        let newhp = chosenEnnemies[0].hp - attack
        chosenEnnemies[0].hp = newhp
    }

}


export function ennemiPhysicalDamage() {
    const attack = Math.floor(chosenEnnemies[0].str - chosenEnnemies[0].str * (chosen[0].def / 100));
    let luck = chosenEnnemies[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosenEnnemies[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosen[0].hp - crit
        chosen[0].hp = newhp
    } else {
        console.log(`${chosenEnnemies[0].name} utilise une attaque physique et inflige ${attack} de dégats`)
        let playersHp = chosen[0].hp - attack
        chosen[0].hp = playersHp
    }
}
export function ennemiMagicDamage() {
    const attack = Math.floor(chosenEnnemies[0].mp - chosenEnnemies[0].mp * (chosen[0].res / 100));
    let luck = chosenEnnemies[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosenEnnemies[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosen[0].hp - crit
        chosen[0].hp = newhp
    } else {
        console.log(`${chosenEnnemies[0].name} utilise une attaque physique et inflige ${attack} de dégats`)
        let playersHp = chosen[0].hp - attack
        chosen[0].hp = playersHp
    }
}

export function magicProtect() {
    const attack = Math.floor(chosenEnnemies[0].mp - chosenEnnemies[0].mp * (chosen[0].res / 100));
    const protectionDamages = Math.floor(attack / 2)
    let playersHP = chosen[0].hp - protectionDamages
    chosen[0].hp = playersHP
    console.log(`${chosenEnnemies[0].name} utilise une attaque magique et inflige ${Math.floor(chosenEnnemies[0].mp/2)} de dégats`)
}

export function physicalProtect() {
    const attack = Math.floor(chosenEnnemies[0].str - chosenEnnemies[0].str * (chosen[0].def / 100));
    const protectionDamages = Math.floor(attack / 2)
    let playersHP = chosen[0].hp - protectionDamages
    chosen[0].hp = playersHP
    console.log(`${chosenEnnemies[0].name} utilise une attaque physique et inflige ${Math.floor(chosenEnnemies[0].mp/2)} de dégats`)
}

export function whoStartPhysical() {
    if (chosenEnnemies[0].spd > chosen[0].spd) {
        console.log(`${chosenEnnemies[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        ennemiesAttack()
        console.log("\n")
        physicalDamage()
    } else if (chosenEnnemies[0].spd == chosen[0].spd) {
        console.log("SPEEDTIE")
        let random = Math.floor(Math.random() * 2) + 1;
        if (random == 2) {
            console.log("\n")
            ennemiesAttack()
            console.log("\n")
            physicalDamage()
        } else {
            console.log("\n")
            physicalDamage()
            console.log("\n")
            ennemiesAttack()
        }
    } else {
        console.log(`${chosen[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        physicalDamage()
        console.log("\n")
        ennemiesAttack()
    }
}

export function whoStartMagic() {
    if (chosenEnnemies[0].spd > chosen[0].spd) {
        console.log(`${chosenEnnemies[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        ennemiesAttack()
        console.log("\n")
        magicDamage()
    } else if (chosenEnnemies[0].spd == chosen[0].spd) {
        console.log("SPEEDTIE")
        let random = Math.floor(Math.random() * 2) + 1;
        if (random == 2) {
            console.log("\n")
            ennemiesAttack()
            console.log("\n")
            magicDamage()
        } else {
            console.log("\n")
            magicDamage()
            console.log("\n")
            ennemiesAttack()
        }
    } else {
        console.log(`${chosen[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        magicDamage()
        console.log("\n")
        ennemiesAttack()
    }
}


//BOSS FIGHT

export function bossPhysicalDamage() {
    const attack = Math.floor(chosenBoss[0].str - chosenBoss[0].str * (chosen[0].def / 100));
    let luck = chosenBoss[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosenBoss[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosen[0].hp - crit
        chosen[0].hp = newhp
    } else {
        console.log(`${chosenBoss[0].name} utilise une attaque physique et inflige ${attack} de dégats`)
        let playersHp = chosen[0].hp - attack
        chosen[0].hp = playersHp
    }
}

export function bossMagicDamage() {
    const attack = Math.floor(chosenBoss[0].mp - chosenBoss[0].mp * (chosen[0].res / 100));
    let luck = chosenBoss[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosenBoss[0].name} Inflige ${crit} dégats avec son attaque magique`)
        let newhp = chosen[0].hp - crit
        chosen[0].hp = newhp
    } else {
        console.log(`${chosenBoss[0].name} utilise une attaque magique et inflige ${attack} de dégats`)
        let playersHp = chosen[0].hp - attack
        chosen[0].hp = playersHp
    }
}

export function bossMagicProtect() {
    const attack = Math.floor(chosenBoss[0].mp - chosenBoss[0].mp * (chosen[0].res / 100));
    const protectionDamages = Math.floor(attack / 2)
    let playersHP = chosen[0].hp - protectionDamages
    chosen[0].hp = playersHP
    console.log(`${chosenBoss[0].name} utilise une attaque magique et inflige ${Math.floor(chosenBoss[0].mp/2)} de dégats`)
}

export function bossPhysicalProtect() {
    const attack = Math.floor(chosenBoss[0].str - chosenBoss[0].str * (chosen[0].def / 100));
    const protectionDamages = Math.floor(attack / 2)
    let playersHP = chosen[0].hp - protectionDamages
    chosen[0].hp = playersHP
    console.log(`${chosenBoss[0].name} utilise une attaque physique et inflige ${Math.floor(chosenBoss[0].mp/2)} de dégats`)
}

export function bossWhoStartPhysical() {
    if (chosenBoss[0].spd > chosen[0].spd) {
        console.log(`${chosenBoss[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        bossAttack()
        console.log("\n")
        physicalDamage()
    } else if (chosenBoss[0].spd == chosen[0].spd) {
        console.log("SPEEDTIE")
        let random = Math.floor(Math.random() * 2) + 1;
        if (random == 2) {
            console.log("\n")
            bossAttack()
            console.log("\n")
            physicalDamageForBoss()
        } else {
            console.log("\n")
            physicalDamageForBoss()
            console.log("\n")
            bossAttack()
        }
    } else {
        console.log(`${chosen[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        physicalDamageForBoss()
        console.log("\n")
        bossAttack()
    }
}

export function bossWhoStartMagic() {
    if (chosenBoss[0].spd > chosen[0].spd) {
        console.log(`${chosenBoss[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        bossAttack()
        console.log("\n")
        magicDamageForBoss()
    } else if (chosenBoss[0].spd == chosen[0].spd) {
        console.log("SPEEDTIE")
        let random = Math.floor(Math.random() * 2) + 1;
        if (random == 2) {
            console.log("\n")
            bossAttack()
            console.log("\n")
            magicDamageForBoss()
        } else {
            console.log("\n")
            magicDamageForBoss()
            console.log("\n")
            bossAttack()
        }
    } else {
        console.log(`${chosen[0].name} est plus rapide et attaque en premier`)
        console.log("\n")
        magicDamageForBoss()
        console.log("\n")
        bossAttack()
    }
}


export function physicalDamageForBoss() {
    const attack = Math.floor(chosen[0].str - chosen[0].str * (chosenBoss[0].def / 100));
    let luck = chosen[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        let crit = attack * 2
        console.log(`${chosen[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosenBoss[0].hp - crit
        chosenBoss[0].hp = newhp
    } else {
        console.log(`${chosen[0].name} Inflige ${attack} dégats avec son attaque physique`)
        let newhp = chosenBoss[0].hp - attack
        chosenBoss[0].hp = newhp
    }

}

export function magicDamageForBoss() {
    const attack = Math.floor(chosen[0].mp - chosen[0].mp * (chosenBoss[0].res / 100));
    let luck = chosen[0].luck
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= luck) {
        console.log("CRITICAL HIT")
        const crit = attack * 2
        console.log(`${chosen[0].name} Inflige ${crit} dégats avec son attaque physique`)
        let newhp = chosenBoss[0].hp - crit
        chosenBoss[0].hp = newhp
    } else {
        console.log(`${chosen[0].name} Inflige ${attack} dégats avec son attaque magique`)
        let newhp = chosenBoss[0].hp - attack
        chosenBoss[0].hp = newhp
    }

}