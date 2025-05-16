import x from '../../../assets/icon/icon-close.svg'

export default function Rule({rule,ocRule}){
    
    return(
        <div id="mondal" onClick={ ocRule }>
            <div>
                <div id="mondal_header">
                    <h2>règle</h2>
                    <img class='action' src={x} alt="crois" onClick={ocRule}/>
                </div>
                <img src={rule} alt='regle' />
            </div>
            
        </div>
    )
}