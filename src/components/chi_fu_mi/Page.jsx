import Jeux from "./bouton/Jeux";
import HeaderP from "./header/Header";
import rule from '../../assets/image/image-rules.svg'
import Rule from "./rules/Rule";
import BtnRule from "./rules/RuleBtn";
import BtnFiv from "./rules/5five";

export default function Page(props) {
    return(
        <>
            {props.rule&& <Rule rule={rule} ocRule={props.ocRule}/>}
            <HeaderP {...props}/>
            <Jeux {...props}/>
            <div id="btnRule">
                <BtnRule {...props}/>
                <BtnFiv {...props}/>
            </div>

            
        </>
    )
}