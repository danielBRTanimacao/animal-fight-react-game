import Heart from "../../assets/imgs/animals-sprite/life.png";
import Knife from "../../assets/imgs/animals-sprite/weapon.png";

export default () => {
    const animalChoose = [
        String.fromCodePoint(128001),
        String.fromCodePoint(128002),
        String.fromCodePoint(128003),
        String.fromCodePoint(128004),
        String.fromCodePoint(128005),
        String.fromCodePoint(128006),
        String.fromCodePoint(128007),
        String.fromCodePoint(128008),
        String.fromCodePoint(128009),
        String.fromCodePoint(128010),
        String.fromCodePoint(128011),
        String.fromCodePoint(128012),
        String.fromCodePoint(128013),
        String.fromCodePoint(128014),
        String.fromCodePoint(128015),
        String.fromCodePoint(128016),
        String.fromCodePoint(128017),
        String.fromCodePoint(128018),
        String.fromCodePoint(128019),
        String.fromCodePoint(128020)
    ];

    return (
        <>
            <div className="container">
                <header>
                    <h1 className="display-1 title-principal text-center">
                        Escolha um animal
                    </h1>
                    <hr />
                </header>
                <section className="d-flex justify-content-center">
                    <div>
                        <button className="btn">
                            <h1 className="animal-bg ">
                                {
                                    animalChoose[
                                        Math.floor(Math.random() * 19 + 1)
                                    ]
                                }
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className="btn">
                            <h1 className="animal-bg">
                                {
                                    animalChoose[
                                        Math.floor(Math.random() * 19 + 1)
                                    ]
                                }
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className="btn">
                            <h1 className="animal-bg">
                                {
                                    animalChoose[
                                        Math.floor(Math.random() * 19 + 1)
                                    ]
                                }
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                                <p>{Math.floor(Math.random() * 10 + 1)}</p>
                            </div>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};
