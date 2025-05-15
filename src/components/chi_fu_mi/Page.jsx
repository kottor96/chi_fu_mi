import Jeux from "./bouton/Jeux";
import HeaderP from "./header/Header";
import Rule from "./rules/Rule";

export default function Page(props) {
    return(
        <>
            <HeaderP/>
            <Jeux/>
            <Rule/>
        </>
    )
}