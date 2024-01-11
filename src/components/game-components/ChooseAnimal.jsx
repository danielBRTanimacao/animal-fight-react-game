import { useState } from "react";

import Heart from "../../assets/imgs/animals-sprite/life.png";
import Knife from "../../assets/imgs/animals-sprite/weapon.png";

export default () => {
    const listOfAnimals = [
        {
            nome: "Rato",
            img: String.fromCodePoint(128001),
            power: 2,
            life: 5,
            special: "cheese"
        },
        {
            nome: "Buffalo",
            img: String.fromCodePoint(128002),
            power: 3,
            life: 5,
            special: "fury"
        },
        {
            nome: "Boi",
            img: String.fromCodePoint(128003),
            power: 5,
            life: 4,
            special: "dash"
        },
        {
            nome: "vaca",
            img: String.fromCodePoint(128004),
            power: 3,
            life: 4,
            special: "pasto"
        },
        {
            nome: "Tigre",
            img: String.fromCodePoint(128005),
            power: 9,
            life: 9,
            special: "power-aliado"
        },
        {
            nome: "Leopardo",
            img: String.fromCodePoint(128006),
            power: 5,
            life: 6,
            special: "two-hits"
        },
        {
            nome: "coelho",
            img: String.fromCodePoint(128007),
            power: 1,
            life: 3,
            special: "jump"
        },
        {
            nome: "Cat",
            img: String.fromCodePoint(128008),
            power: 3,
            life: 3,
            special: "smooth"
        },
        {
            nome: "Dragon",
            img: String.fromCodePoint(128009),
            power: 10,
            life: 10,
            special: "fireball"
        },
        {
            nome: "Jacare",
            img: String.fromCodePoint(128010),
            power: 10,
            life: 7,
            special: "bite"
        },
        {
            nome: "Baleia",
            img: String.fromCodePoint(128011),
            power: 3,
            life: 10,
            special: "tank"
        },
        {
            nome: "Caracol",
            img: String.fromCodePoint(128012),
            power: 2,
            life: 2,
            special: "snow"
        },
        {
            nome: "Python",
            img: String.fromCodePoint(128013),
            power: 3,
            life: 6,
            special: "poison"
        },
        {
            nome: "Cavalo",
            img: String.fromCodePoint(128014),
            power: 3,
            life: 6,
            special: "coice"
        },
        {
            nome: "Bode",
            img: String.fromCodePoint(128015),
            power: 3,
            life: 4,
            special: "cabecada"
        },
        {
            nome: "Ovelha",
            img: String.fromCodePoint(128016),
            power: 2,
            life: 3,
            special: "comer"
        },
        {
            nome: "ovelhinha",
            img: String.fromCodePoint(128017),
            power: 2,
            life: 4,
            special: "jump"
        },
        {
            nome: "Macaco",
            img: String.fromCodePoint(128018),
            power: 4,
            life: 4,
            special: "banana"
        }
    ];

    const randomChoose = Math.floor(Math.random() * 17 + 1);

    const [gameFight, setGameFight] = useState(true);
    const [valueAnimal, setAnimalValue] = useState();

    const [turno, setTurno] = useState(1);

    const chosenAnimal = () => {
        setAnimalValue(randomChoose);
        setGameFight(false);
    };

    const atack = () => {
        setTurno((value) => value + 1);
    };

    return (
        <>
            {gameFight ? (
                <section className="container">
                    <header>
                        <h1 className="display-1 title-principal text-center pb-3">
                            Escolha um animal
                        </h1>
                        <hr />
                    </header>

                    <section className="d-flex justify-content-center">
                        <div>
                            <button
                                type="submit"
                                className="btn"
                                onClick={chosenAnimal}
                            >
                                <h1 className="animal-bg">
                                    {listOfAnimals[randomChoose].img}
                                </h1>
                                <div className="d-flex justify-content-evenly pt-4">
                                    <img src={Heart} alt="" />
                                    <img src={Knife} alt="" />
                                </div>
                                <div className="d-flex justify-content-around fs-1">
                                    <p>{listOfAnimals[randomChoose].life}</p>
                                    <p>{listOfAnimals[randomChoose].power}</p>
                                </div>
                            </button>
                        </div>
                    </section>
                </section>
            ) : (
                <>
                    <section className="text-center">
                        <button
                            className="btn btn-game mx-1 my-1"
                            onClick={atack}
                        >
                            Atacar
                        </button>
                        <button className="btn btn-game mx-1 my-1" disabled>
                            Especial
                        </button>
                        <button className="btn btn-game mx-1 my-1" disabled>
                            Fugir
                        </button>
                    </section>
                    <div className="text-center pt-5">
                        <h1>Turno</h1>
                        <h5>{turno}</h5>
                    </div>
                    <section className="container-lg d-flex justify-content-evenly fight-style">
                        <div>
                            <h3>{listOfAnimals[valueAnimal].nome}</h3>
                            <h1 className="animal-bg-fight">
                                {listOfAnimals[valueAnimal].img}
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around fs-1">
                                <p>{listOfAnimals[valueAnimal].life}</p>
                                <p>{listOfAnimals[valueAnimal].power}</p>
                            </div>
                        </div>

                        <div>
                            <h3>{listOfAnimals[randomChoose].nome}</h3>
                            <h1 className="animal-bg-fight-enemy">
                                {listOfAnimals[randomChoose].img}
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="coracao" />
                                <img src={Knife} alt="arma" />
                            </div>
                            <div className="d-flex justify-content-around fs-1">
                                <p>{listOfAnimals[randomChoose].life}</p>
                                <p>{listOfAnimals[randomChoose].power}</p>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};
