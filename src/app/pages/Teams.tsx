import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/components/Button";
import { vetorBackground, vetorCars } from "../../assets";
import { Menu } from "../shared/components/Menu";
import { CardInfo } from "../shared/components/CardInfo";

export const Teams = () => {
    const [idMenu, setIdMenu] = useState<number>(2);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home_page');
        sessionStorage.clear();
    };

    const handleMenuSelect = (index: number) => {
        setIdMenu(index); 
    };

    return (
        <>
            <div className={"container teams"}>
                <div className={"background-logo"}>
                {vetorBackground.map((item, index) => (
                            <img src={item} alt="" key={index} className={index === idMenu ? 'show' : ''} />
                        ))}
                </div>
                <Button onClick={handleClick} className={`btn btn-teams bg-${idMenu}`} index={6} />
                <div className="car-box">
                    <div className="car">
                        {vetorCars.map((item, index) => (
                            <img src={item} alt="" key={index} className={index === idMenu ? 'show' : ''} />
                        ))}
                    </div>
                </div>
                <Menu onSelect={handleMenuSelect} />
                <CardInfo
                    id={idMenu}
                    title="dddd"
                    base="aaa"
                    chassi="aaa"
                    firstEntry={2}
                    powerUnit="ddd"
                    teamChief="dddd"
                    technicalChief="dddd"
                    fastestLaps={2}
                    poles={2}
                    worldChamp={2} 
                />
            </div>
        </>
    );
};
