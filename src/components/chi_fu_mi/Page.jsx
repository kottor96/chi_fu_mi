import Jeux from "./bouton/Jeux";
import HeaderP from "./header/Header";
import BtnRule from "./rules/RuleBtn";

export default function Page(props) {
    return(
        <>
            <HeaderP/>
            <Jeux/>
            <BtnRule/>
        </>
    )
}