export default function Relancer(props) {
    
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