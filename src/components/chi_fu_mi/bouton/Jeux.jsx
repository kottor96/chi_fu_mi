import Bouton from "./button";
import pierre from "../../../assets/icon/icon-rock.svg"
import papier from "../../../assets/icon/icon-paper.svg"
import ciseaux from "../../../assets/icon/icon-scissors.svg"

export default function Jeux() {
    return(
        <section>
            <div id="divJeux">
                <Bouton arme={pierre} alt={'pierre'} color={'rouge'}/>
                <Bouton arme={papier} alt={'papier'} color={'bleu'}/>
                <Bouton arme={ciseaux} alt={'ciceaux'} color={'jaune'}/>
            </div>
            
        </section>
    )
}