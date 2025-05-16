import Bouton from "./button";
import pierre from "../../../assets/icon/icon-rock.svg"
import papier from "../../../assets/icon/icon-paper.svg"
import ciseaux from "../../../assets/icon/icon-scissors.svg"
import Relancer from "./Relancer";

export default function Jeux(props) {
    let tableau = [
        {arme:pierre, id:'pierre', alt:'pierre', color:'rouge'},
        {arme:papier, id:'papier', alt:'papier', color:'bleu'},
        {arme:ciseaux, id:'ciseaux', alt:'cicesaux', color:'jaune'}
    ]
    const selection = [
        tableau.find((item) => item.id == props.playerChose),
        tableau.find((item) => item.id == props.botChose),
    ];
    
    return(
        <section>
            
            {!props.lancer? 
                <>
                    <div id="divJeux">
                        {tableau.map((element)=>(
                            <Bouton key={element.id} {...element} {...props} />
                        ))}
                    </div>
                </>
                :
                <>
                    <div id="divLancer">
                        {selection.map((element,index) => (
                            <Bouton key={index} {...element} />
                        ))}
                        <Relancer {...props}/>
                    </div>
                </>
            }
                
            
        </section>
    )
}