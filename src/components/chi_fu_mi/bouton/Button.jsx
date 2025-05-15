
export default function Bouton({arme,alt,color}) {
    return(
        <div className={color}>
            <div>
                <img src={arme} alt={alt}/>
            </div>
            
        </div>
    )

}