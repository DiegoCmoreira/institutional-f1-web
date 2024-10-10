import { useState, useEffect } from "react";
import { vetorScuderias } from "../../../assets";
import '../../../css/Menu.css'

interface MenuProps {
    onSelect: (index: number) => void; 
}

export const Menu: React.FC<MenuProps> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(2); 

    useEffect(() => {
        sessionStorage.setItem('idMenu', selectedIndex.toString());
        props.onSelect(selectedIndex); 
    }, [selectedIndex]); 

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    const getVisibleItems = () => {
        const totalItems = vetorScuderias.length;
        const visibleItems = [];
        for (let i = -2; i <= 2; i++) {
            let newIndex = (selectedIndex + i + totalItems) % totalItems;
            visibleItems.push(vetorScuderias[newIndex]);
        }
        return visibleItems;
    };

    return (
        <div className="menu-box">
            <div className="menu">
                {getVisibleItems().map((item, index) => (
                    <div className={`item ${index === 2 ? 'selected' : ''}`} key={index}>
                        <button className="btn-item" onClick={() => handleSelect((selectedIndex + index - 2 + vetorScuderias.length) % vetorScuderias.length)}>
                            <img src={item} alt={`Scuderia ${index}`} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
