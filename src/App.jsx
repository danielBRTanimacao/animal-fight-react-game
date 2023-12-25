import HeaderGame from "./components/HeaderGame";

export default () => {
    return (
        <>
            <HeaderGame />
            <section className="pt-5">
                <div className="container text-center bg-img-back rounded mt-5 p-5">
                    <h1 className="title-principal display-5 pb-4">
                        Animal fight
                    </h1>
                    <div className="d-grid gap-2 col-8 mx-auto">
                        <button className="btn btn-lg btn-game">jogar</button>
                        <button className="btn btn-lg btn-game" disabled>
                            Opções
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
