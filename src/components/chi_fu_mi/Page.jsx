import Jeux from "./bouton/Jeux";
import HeaderP from "./header/Header";

export default function Page(props) {
    return(
        <>
            <HeaderP/>
            <Jeux/>
            <Rule/>
        </>
    )
}