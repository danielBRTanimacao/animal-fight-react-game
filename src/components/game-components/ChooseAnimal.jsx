// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Heart from "../../assets/imgs/animals-sprite/life.png";
import Knife from "../../assets/imgs/animals-sprite/weapon.png";

export default () => {
    const animalChoose = [
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

    const acRandom = [
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1)
    ];

    const navigation = useNavigate();
    const changeToGame = (e) => {
        navigation("/fight");
        console.log(e.target);
    };

    return (
        <>
            <div className="container">
                <header>
                    <h1 className="display-1 title-principal text-center pb-3">
                        Escolha um animal
                    </h1>
                    <hr />
                </header>
                <section className="d-flex justify-content-center">
                    <form onSubmit={changeToGame}>
                        <button type="submit" className="btn">
                            <h1 className="animal-bg ">
                                {animalChoose[acRandom[0]].img}
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{animalChoose[acRandom[0]].life}</p>
                                <p>{animalChoose[acRandom[0]].power}</p>
                            </div>
                        </button>
                    </form>
                    <form onSubmit={changeToGame}>
                        <button type="submit" className="btn">
                            <h1 className="animal-bg ">
                                {animalChoose[acRandom[1]].img}
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{animalChoose[acRandom[1]].life}</p>
                                <p>{animalChoose[acRandom[1]].power}</p>
                            </div>
                        </button>
                    </form>
                    <form onSubmit={changeToGame}>
                        <button type="submit" className="btn">
                            <h1 className="animal-bg ">
                                {animalChoose[acRandom[2]].img}
                            </h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{animalChoose[acRandom[2]].life}</p>
                                <p>{animalChoose[acRandom[2]].power}</p>
                            </div>
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};
