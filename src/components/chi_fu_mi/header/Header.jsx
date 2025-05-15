import Scoring from "./compteur/Score";
import Logo from "./logo/logo";
import tBtn from "../../../assets/logo/logo.svg"
// import tBtnbis from "../../../assets/logo/logo-bonus.svg"

export default function HeaderP(props){
    return(
        <header>
            <Logo logo={tBtn}/>
            <Scoring/>
        </header>
    )
}
