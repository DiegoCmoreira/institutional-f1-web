import { useEffect, useState } from "react";
import { vetorIcons, vetorImages } from "../../assets"
import { Button } from "../shared/components/Button"
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/teams_page');
    };

    useEffect(() => {
        if(index < vetorImages.length){
            const tempo = setTimeout(()=>{
                setIndex(index + 1);
            }, 3500);
            return () => clearTimeout(tempo);
        }
        else{
            setIndex(0)
        }
    }, [index]);

    return (
        <>
            <div className="container home">
                <div className="logo-home">
                    <img src={vetorIcons[2]} alt="F1" />
                    <img src={vetorIcons[4]} alt="Formula 1 tm" />
                </div>
                <div className="texto">
                    <h1 className="roboto-bold">
                        A website for fans of the world's greatest motorsport, Formula 1.
                    </h1>
                </div>
                <div className={`moldura`}>
                    <img src={vetorImages[index]} alt="" />
                </div>
                    <Button onClick={handleClick} className="btn btn-home" index={5} />
            </div>
        </>
    )
} 