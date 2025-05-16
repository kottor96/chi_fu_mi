
export default function Bouton({arme,alt,color,play,id}) {
    
    return(
        
        <div id={id} className={color} onClick={play && ((e) => play(e))}>
            
            <div>
                
                <img src={arme} alt={alt}/>
            </div>
            
        </div>
    )

}