import Jeux from "./bouton/Jeux";
import HeaderP from "./header/Header";
import rule from '../../assets/image/image-rules.svg'
import Rule from "./rules/Rule";
import BtnRule from "./rules/RuleBtn";

export default function Page(props) {
    return(
        <>
            {props.rule&& <Rule rule={rule}/>}
            <HeaderP {...props}/>
            <Jeux {...props}/>
            <BtnRule {...props}/>
        </>
    )
}