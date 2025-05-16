
export default function Bouton({arme,alt,color,play,id,gagneur}) {
    
    return(
        
        <div className={`${color} ${gagneur ? 'gagneur' : ''}`}>
            
            <div id={id} onClick={play && ((e) => play(e))}>
                
                <img src={arme} alt={alt}/>
            </div>
            
        </div>
    )

}