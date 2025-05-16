export default function Relancer(props) {
    console.log(props.resultat);
    
    return(
        <div id="relancer">
            <p>
                {
                    <>
                        {props.resultat}
                    </>
                }
            </p>
            <button onClick={props.relancer}>Relancer</button>
        </div>
    )
}