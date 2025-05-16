export default function BtnFiv({changerMode,mode}){
    return(
        <div id="btnFiv">
            <button className="action" onClick={changerMode}>{!mode?'5 Five':'3five'}</button>
        </div>
    )
}