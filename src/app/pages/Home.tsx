import { vetorIcons, vetorImages } from "../../assets"
import { Button } from "../shared/components/Button"

export const Home = () => {
    const handleClick = () => {
        console.log(1);
    };

    return (
        <>
            <div className="container">
                <div className="logo-inicial">
                    <img src={vetorIcons[2]} alt="F1" />
                    <img src={vetorIcons[4]} alt="Formula 1 tm" />
                </div>
                <div className="texto">
                    <h1 className="roboto-bold">
                        A website for fans of the world's greatest motorsport, Formula 1.
                    </h1>
                </div>
                <div className="moldura">
                    <img src={vetorImages[3]} alt="" />
                </div>
                    <Button onClick={handleClick} className="btn btn-inicio" index={5} />
            </div>
        </>
    )
} 