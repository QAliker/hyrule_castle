import {
  title,
  turn,
  healthBar,
  readlineAttackAndHeal,
  readlineRepeat,
  newstage,
  finalStage
} from "./function/fight";
import {
  chosen,
  chooseCharacter
} from "./function/choose";
import {
  chooseRandomEnnemies,
  finalDeleteEnnemi
} from "./function/chooseEB";
import {
  endASCII
} from "./function/style";



chooseCharacter()


export function oneturn() {
  chooseRandomEnnemies()
  readlineRepeat()
  finalDeleteEnnemi()
  newstage()
}
oneturn()



endASCII();