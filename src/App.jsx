import '../src/App.css';
import Src  from '/src/components/Photo.jsx';
import Info  from '/src/components/Info.jsx';
import Description  from '/src/components/Description.jsx';
import {useEffect, useState} from "react";
import KeyFeatures from "./components/Keyfeatures.jsx";

function App() {
    const [color, setCollor] = useState(0);
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);
    return (
        <>

            <button
                onClick={() => {
                    const randomNumber = "#" + Math.floor(Math.random() * 16777215).toString(16);

                    setCollor(randomNumber);
                }}
                style={{ backgroundColor: color}}

            >

                Поменять цвет на рандомный
            </button>
            <button
                onClick={() => {
                    const randomNumber = "#16171D";

                    setCollor(randomNumber);
                }}
                style={{ backgroundColor: color}}

            >

                Вернуть цвет
            </button>
            <Info></Info>
            <Description></Description>
            <KeyFeatures></KeyFeatures>
            <Src src="img/Hoi4.jpg" />




        </>
);

}
export default App;