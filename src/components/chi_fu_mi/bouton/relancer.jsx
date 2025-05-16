export default function Relancer(props) {
    return(
        <div id="relancer">
            <p>
                {
                    <>
                        {props.resultat == 'bot' && 'Vous avez perdu !'}
                        {props.resultat == 'joueur' && 'Vous avez gagnez !'}
                        {props.resultat == 'egaliter' && 'EGALITER !!'}
                        <button onClick={props.relancer}>Relancer</button>
                    </>
                }
            </p>
        </div>
    )
}