const readlineSync = require('readline-sync');
import {
    chosen
} from "../function/choose";
import {
    chosenEnnemies,
    chosenBoss
} from "../function/chooseEB";
import {
    magicDamage,
    physicalDamage,
    ennemiPhysicalDamage,
    ennemiMagicDamage,
    magicProtect,
    physicalProtect,
    whoStartPhysical,
    whoStartMagic,
    bossPhysicalDamage,
    bossMagicDamage,
    bossPhysicalProtect,
    bossMagicProtect,
    bossWhoStartMagic,
    bossWhoStartPhysical
} from "./more_statistics";


export function ReadlineMods() {
    const choice = ['ATTAQUER', 'SE SOIGNER', 'PROTEGER', 'ECHAPPER'],
        index = readlineSync.keyInSelect(choice, `QUE DOIS FAIRE ${chosen[0].name}?`);
    console.log(`${chosen[0].name} choisi ` + choice[index]);
    if (choice[index] == "ATTAQUER") {
        const attackChoice = ['PHYSIQUE', 'MAGIQUE'],
            index = readlineSync.keyInSelect(attackChoice, `QUELLE TYPE ?`)
        console.log(`${chosen[0].name} choisi ` + attackChoice[index])

        if (attackChoice[index] == 'PHYSIQUE') {
            whoStartPhysical()

        } else if (attackChoice[index] == 'MAGIQUE') {
            whoStartMagic()

        } else {
            console.log(`${chosen[0].name} Annule son attaque`)
            console.log("\n");
            ennemiesAttack()
        }

    } else if (choice[index] == "SE SOIGNER") {
        let newHP = Math.floor(chosen[0].maxhp / 2) + chosen[0].hp
        chosen[0].hp = newHP

        if (chosen[0].hp > chosen[0].maxhp) {
            chosen[0].hp = chosen[0].maxhp
        }
        console.log(`${chosen[0].name} possède ${chosen[0].hp} points de vie`);
        console.log("\n");
        ennemiesAttack()

    } else if (choice[index] == "ECHAPPER") {
        console.log(`${chosen[0].name} tente de s'échapper`)
        chosen[0].hp = 0

        console.log(`\nNE JAMAIS TOURNER SON DOS A UN ENNEMI`)

    } else if (choice[index] == "PROTEGER") {
        console.log(`${chosen[0].name} se protège`)
        console.log("\n")
        protectAttack()


    } else
        console.log(`${chosen[0].name} est un flemmard et n'a rien envie de faire`);

}

export function ennemiesAttack() {
    const min = 1;
    const max = 2;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random == 1) {
        if (chosenEnnemies[0].hp <= 0) {
            console.log(`${chosenEnnemies[0].name} est vaincu et ne peut plus attaquer.`);
            return;
        } else {
            ennemiPhysicalDamage()
        }

    } else if (random == 2) {
        if (chosenEnnemies[0].hp <= 0) {
            console.log(`${chosenEnnemies[0].name} est vaincu et ne peut plus attaquer.`);
            return;
        } else {
            ennemiMagicDamage()
        }
    }
}


export function protectAttack() {
    const min = 1;
    const max = 2;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (chosenEnnemies[0].hp <= 0) {
        console.log(`${chosenEnnemies[0].name} est vaincu et ne peut plus attaquer.`);
        return;

    } else if (chosenEnnemies[0].hp > 0 && random == 1) {
        physicalProtect()

    } else if (chosenEnnemies[0].hp > 0 && random == 2) {
        magicProtect()
    }
}

//Final Fight

export function bossAttack() {
    const min = 1;
    const max = 2;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random == 1) {
        if (chosenBoss[0].hp <= 0) {
            console.log(`${chosenBoss[0].name} est vaincu et ne peut plus attaquer.`);

        } else {
            bossPhysicalDamage()

        }

    } else if (random == 2) {
        if (chosenBoss[0].hp <= 0) {
            console.log(`${chosenBoss[0].name} est vaincu et ne peut plus attaquer.`);

        } else {
            bossMagicDamage()

        }
    }
}

export function bossProtectAttack() {
    const min = 1;
    const max = 2;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (chosenBoss[0].hp <= 0) {
        console.log(`${chosenBoss[0].name} est vaincu et ne peut plus attaquer.`);
        return;

    } else if (chosenBoss[0].hp > 0 && random == 1) {
        bossPhysicalProtect()

    } else if (chosenBoss[0].hp > 0 && random == 2) {
        bossMagicProtect()
    }
}




export function finalReadlineMods() {
    const choice = ['ATTAQUER', 'SE SOIGNER', 'PROTEGER', 'ECHAPPER'],
        index = readlineSync.keyInSelect(choice, 'QUE DOIS-JE FAIRE?');
    console.log(`${chosen[0].name} choisi ` + choice[index]);

    if (choice[index] == "ATTAQUER") {
        const attackChoice = ['PHYSIQUE', 'MAGIQUE'],
            index = readlineSync.keyInSelect(attackChoice, `QUELLE TYPE ?`)
        console.log(`${chosen[0].name} choisi ` + attackChoice[index])

        if (attackChoice[index] == 'PHYSIQUE') {
            bossWhoStartPhysical()

        } else if (attackChoice[index] == 'MAGIQUE') {
            bossWhoStartMagic()

        } else {
            console.log(`${chosen[0].name} Annule son attaque`)
            console.log("\n");
            bossAttack()
        }

    } else if (choice[index] == "SE SOIGNER") {
        let newHP = chosen[0].maxhp / 2 + chosen[0].hp
        chosen[0].hp = newHP
        if (chosen[0].hp > chosen[0].maxhp) {
            chosen[0].hp = chosen[0].maxhp
        }
        console.log(`${chosen[0].name} possède ${chosen[0].hp} points de vie`);

        bossAttack()

    } else if (choice[index] == "ECHAPPER") {
        console.log(`${chosen[0].name} tente de s'échapper`)
        chosen[0].hp = 0

        console.log(`\nNE JAMAIS TOURNER SON DOS A UN ENNEMI`)

    } else if (choice[index] == "PROTEGER") {
        console.log(`${chosen[0].name} se protège`)
        bossProtectAttack()
    } else {
        console.log(`${chosen[0].name} est un flemmard et n'a rien envie de faire`);
    }
}