
export default function Bouton({arme,alt,color,play,id}) {
    
    return(
        
        <div className={color}>
            
            <div id={id} onClick={play && ((e) => play(e))}>
                
                <img src={arme} alt={alt}/>
            </div>
            
        </div>
    )

}