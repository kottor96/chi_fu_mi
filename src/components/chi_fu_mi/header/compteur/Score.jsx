

export default function Scoring({score,botScore}) {
    return(
        <div>
            <p>
                score <br />
                <span id="score">J: {score} - B: {botScore}</span>
            </p>  
        </div>
    )
}