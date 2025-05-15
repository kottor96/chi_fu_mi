import Scoring from "./compteur/Score";
import Logo from "./logo/logo";

export default function Header(props ){
    return(
        <header>
            <Logo/>
            <Scoring/>
        </header>
    )
}
