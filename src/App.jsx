import HeaderGame from "./components/HeaderGame";
import GameMain from "./components/GameMain";
import Playing from "./components/Playing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () => {
    return (
        <>
            <HeaderGame />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GameMain />} />
                    <Route path="/game" element={<Playing />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
