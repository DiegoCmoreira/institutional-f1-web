import { vetorIcons } from "../../../assets"
import "../../../css/geral.css"

interface ButtonProps {
    className: string;
    index: number;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <button className={props.className} onClick={props.onClick}>
                <img src={vetorIcons[props.index]} alt="" />
            </button>
        </>
    );
};