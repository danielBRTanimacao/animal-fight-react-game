import { useNavigate } from "react-router-dom";

export default () => {
    const navigation = useNavigate();
    const changeToGame = () => {
        navigation("/game");
    };

    return (
        <>
            <section className="pt-5">
                <div className="container text-center bg-img-back img-fluid rounded mt-5 p-5">
                    <h1 className="title-principal fs-1 pb-4">Animal fight</h1>
                    <div className="d-grid gap-2 col-8 mx-auto">
                        <button
                            className="btn btn-lg btn-game"
                            onClick={changeToGame}
                        >
                            jogar
                        </button>
                        <button className="btn btn-lg btn-game" disabled>
                            Compartilhar
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
