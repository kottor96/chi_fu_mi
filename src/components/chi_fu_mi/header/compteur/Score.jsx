

export default function Scoring({score,botScore}) {
    return(
        <div id="scoring">
            <p>score <br /></p>
            <p><span id="score_normal">J: {score}</span> <span id="score_red">B: {botScore}</span></p>
        </div>
    )
}