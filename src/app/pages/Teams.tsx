import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/components/Button";
import { vetorBackground, vetorCars } from "../../assets";
import { Menu } from "../shared/components/Menu";
import { CardInfo } from "../shared/components/CardInfo";
import { ITeams, TeamsService } from "../shared/service/api/TeamsService";
import { ApiException } from "../shared/service/ApiException";
import { TeamsApi } from "../shared/service/api/TeamsApi";

export const Teams = () => {
    const navigate = useNavigate();
    const [idMenu, setIdMenu] = useState<number>(2);
    const [team, setTeam] = useState<ITeams>();

    const handleClick = () => {
        navigate('/home_page');
        sessionStorage.clear();
    };

    const handleMenuSelect = (index: number) => {
        setIdMenu(index);
    };

    /*
    useEffect(() => {
        TeamsService.getById(idMenu + 1)
            .then((result) => {
                if (result instanceof ApiException) {
                    console.log(result)
                }
                else {
                    setTeam(result)
                }
            })
    }, [idMenu])
    */

    useEffect(() => {
        const selectedTeam = TeamsApi.find(item => item.id === idMenu);
        if (selectedTeam) {
            setTeam(selectedTeam);
        }
    }, [idMenu]);



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
                    title={team ? team.name : ''}
                    base={team ? team.teamInfo.base : ''}
                    chassi={team ? team.carInfo.chassis : ''}
                    firstEntry={team ? team.teamInfo.firstEntry : 0}
                    powerUnit={team ? team.carInfo.powerUnit : ''}
                    teamChief={team ? team.teamInfo.teamChief : ''}
                    technicalChief={team ? team.teamInfo.technicalChief : ''}
                    fastestLaps={team ? team.raceData.fastestLaps : 0}
                    poles={team ? team.raceData.poles : 0}
                    worldChamp={team ? team.raceData.worldChamp : 0}
                    bgLine={idMenu}
                />
            </div>
        </>
    );
};
