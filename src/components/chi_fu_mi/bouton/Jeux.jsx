import Bouton from "./button";
import pierre from "../../../assets/icon/icon-rock.svg"
import papier from "../../../assets/icon/icon-paper.svg"
import ciseaux from "../../../assets/icon/icon-scissors.svg"
import spock from "../../../assets/icon/icon-spock.svg"
import lizzard from "../../../assets/icon/icon-lizard.svg"
import Relancer from "./Relancer";

const tableau = [
    {arme:pierre, id:'pierre', alt:'pierre', color:'rouge'},
    {arme:papier, id:'papier', alt:'papier', color:'bleu'},
    {arme:ciseaux, id:'ciseaux', alt:'cicesaux', color:'jaune'},
    
]
const tableau2 = [
    {arme:pierre, id:'pierre', alt:'pierre', color:'rouge'},
    {arme:papier, id:'papier', alt:'papier', color:'bleu'},
    {arme:ciseaux, id:'ciseaux', alt:'cicesaux', color:'jaune'},
    {arme:spock, id:'spock', alt:'spock', color:'cyan'},
    {arme:lizzard, id:'lizzard', alt:'lizzard', color:'violet'}
]
export default function Jeux(props) {
    
    const selection = [
        tableau2.find((item) => item.id == props.playerChose),
        tableau2.find((item) => item.id == props.botChose),
    ];
    
    
    
    return(
        <section>
            {props.lancer && 
                <div id="choseTitle">
                    <h2>Votre choix</h2>
                    <h2>Le choix de la maison</h2>
                </div>
            }
            {!props.lancer? 
                <>
                    {!props.mode ?
                        
                        <div id="divJeux">
                            {tableau.map((element)=>(
                                <Bouton key={element.id} {...element} {...props} />
                            ))}
                        </div>
                        
                        :

                        <div id="divJeux5">
                            {tableau2.map((element)=>(
                                <Bouton key={element.id} {...element} {...props} />
                            ))}
                        </div>
                    }
                    
                </>
                :
                <>
                    <div id="divLancer">
                        {selection.map((element,index) => (
                            <Bouton key={index} {...element} lancer={props.lancer} 
                            gagneur={
                                (console.log(index,props.resultat),
                                
                                props.resultat == 'vous avez gagnez' && index==0 ? true :
                                props.resultat == 'Vous avez perdu' && index==1 ? true :
                                false
                                )
                            }/>
                        ))}
                        <Relancer {...props}/>
                    </div>
                    
                </>
            }
                
            
        </section>
    )
}