
export default function Bouton({arme,alt,color}) {
    return(
        <div className={color}>
            <img src={arme} alt={alt}/>
        </div>
    )

}