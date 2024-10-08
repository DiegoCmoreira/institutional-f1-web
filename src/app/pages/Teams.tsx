import { useNavigate } from "react-router-dom";
import { Button } from "../shared/components/Button";
import { vetorCars, vetorIcons } from "../../assets";
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
                    <img src={vetorIcons[7]} alt="" />
                </div>
                    <Button onClick={handleClick} className="btn btn-teams bg-red-ferrari" index={6} />
                    <Menu />
                    <CardInfo />
            </div>
        </>
    )
} 