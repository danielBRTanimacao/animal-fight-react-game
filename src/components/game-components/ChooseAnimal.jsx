import Snake from "../../assets/imgs/animals-sprite/snake.png";
import Pinguim from "../../assets/imgs/animals-sprite/pinguim.png";
import Baleia from "../../assets/imgs/animals-sprite/baleia.png";
import Monkey from "../../assets/imgs/animals-sprite/monkey.png";
import Elefante from "../../assets/imgs/animals-sprite/elefante.png";

import Heart from "../../assets/imgs/animals-sprite/life.png";
import Knife from "../../assets/imgs/animals-sprite/weapon.png";

export default () => {
    const animalChoose = [Snake, Pinguim, Baleia, Monkey, Elefante];

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
                            <img
                                width={150}
                                className="bg-animal img-fluid"
                                src={
                                    animalChoose[Math.floor(Math.random() * 5)]
                                }
                                alt="snake"
                            />
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
                            <img
                                width={150}
                                className="bg-animal img-fluid"
                                src={
                                    animalChoose[Math.floor(Math.random() * 5)]
                                }
                                alt="snake"
                            />
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
                            <img
                                width={150}
                                className="bg-animal img-fluid"
                                src={
                                    animalChoose[Math.floor(Math.random() * 5)]
                                }
                                alt="snake"
                            />
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
                <section>Como jogar?</section>
            </div>
        </>
    );
};
