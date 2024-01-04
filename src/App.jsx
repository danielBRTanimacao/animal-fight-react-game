import HeaderGame from "./components/HeaderGame";
import GameMain from "./components/GameMain";
import Playing from "./components/Playing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FightScene from "./components/game-components/FightScene";

export default () => {
    return (
        <>
            <HeaderGame />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GameMain />} />
                    <Route path="/game" element={<Playing />} />
                    <Route path="/fight" element={<FightScene />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
