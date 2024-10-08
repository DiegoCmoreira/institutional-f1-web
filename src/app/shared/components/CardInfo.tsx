import { vetorIcons, vetorScuderias } from "../../../assets";
import "../../../css/geral.css"

interface CardInfoProps {
    id: number;
    title: string;
    base: string;
    chassi: string;
    teamChief: string;
    technicalChief: string;
    powerUnit: string;
    firstEntry: number;
    fastestLaps: number;
    poles: number;
    worldChamp: number;
}

export const CardInfo: React.FC<CardInfoProps> = (props) => {
    return (
        <>
            <div className="card-box">
                <div className="card bg-white-gray">
                    <div className="header">
                        <img src={vetorScuderias[props.id]} alt="" />
                        <h2 className="roboto-black">{props.title}</h2>
                        <img src={vetorScuderias[props.id]} alt="" />
                    </div>
                    <span className="line"></span>
                    <div className="content">
                        <div className="column info">
                            <div>
                                <p className="roboto-bold">Base</p>
                                <p className="roboto-medium">{props.base}</p>
                            </div>
                            <div>
                                <p className="roboto-bold">Team Chief</p>
                                <p className="roboto-medium">{props.teamChief}</p>
                            </div>
                            <div>
                                <p className="roboto-bold">Technical Chief</p>
                                <p className="roboto-medium">{props.technicalChief}</p>
                            </div>
                        </div>
                        <div className="column info">
                            <div>
                                <p className="roboto-bold">Chassis</p>
                                <p className="roboto-medium">{props.chassi}</p>
                            </div>
                            <div>
                                <p className="roboto-bold">Power Unit</p>
                                <p className="roboto-medium">{props.powerUnit}</p>
                            </div>
                            <div>
                                <p className="roboto-bold">First Team Entry</p>
                                <p className="roboto-medium">{props.firstEntry}</p>
                            </div>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="footer">
                        <div className="column title">
                            <p className="roboto-bold">Fastest Laps</p>
                            <p className="roboto-bold">Pole Positions </p>
                            <p className="roboto-bold">World Championships</p>
                        </div>
                        <div className="column data">
                            <p className="roboto-bold">{props.fastestLaps}</p>
                            <p className="roboto-bold">{props.poles}</p>
                            <p className="roboto-bold">{props.worldChamp}</p>
                        </div>
                        <div className="column img">
                            <img src={vetorIcons[1]} alt="" />
                            <img src={vetorIcons[0]} alt="" />
                            <img src={vetorIcons[3]} alt="" />
                        </div>
                    </div>
                    <span className="line"></span>
                </div>
            </div>
        </>
    )
}