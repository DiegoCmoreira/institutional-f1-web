import { useNavigate } from "react-router-dom";
import { Button } from "../shared/components/Button";
import { vetorBackground } from "../../assets";
import { Menu } from "../shared/components/Menu";
import { CardInfo } from "../shared/components/CardInfo";

export const Teams = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home_page');
    };
    return (
        <>
            <div className={"container teams"}>
                <div className={"background-logo"}>
                    <img src={vetorBackground[2]} alt="" />
                </div>
                    <Button onClick={handleClick} className={`btn btn-teams bg-${2}`} index={6} />
                    <Menu />
                    <CardInfo 
                    id={2} 
                    title="dddd" 
                    base="aaa" 
                    chassi="aaa" 
                    firstEntry={2} 
                    powerUnit="ddd" 
                    teamChief="dddd" 
                    technicalChief="dddd" 
                    fastestLaps={2} 
                    poles={2} 
                    worldChamp={2} />
            </div>
        </>
    )
} 