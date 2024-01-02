import { useState } from "react";

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
        String.fromCodePoint(128021),
        String.fromCodePoint(128022),
        String.fromCodePoint(128024),
        String.fromCodePoint(128025),
        String.fromCodePoint(128026),
        String.fromCodePoint(128027),
        String.fromCodePoint(128028),
        String.fromCodePoint(128029),
        String.fromCodePoint(128030),
        String.fromCodePoint(128031),
        String.fromCodePoint(128038),
        String.fromCodePoint(128042),
        String.fromCodePoint(128034),
        String.fromCodePoint(128019)
    ];

    const animal = animalChoose[Math.floor(Math.random() * 19 + 1)];
    const life = Math.floor(Math.random() * 10 + 1);
    const melee = Math.floor(Math.random() * 10 + 1);

    const animalChosen = () => {
        console.log(animal);
        console.log(life);
        console.log(melee);
    };

    return (
        <>
            <div className="container">
                <header>
                    <h1 className="display-1 title-principal text-center pb-3">
                        Clique no globo
                    </h1>
                    <hr />
                </header>
                <section className="container text-center pb-5">
                    <button className="btn btn-success">globo</button>
                </section>
                <section className="d-flex justify-content-center">
                    <div>
                        <button className="btn" onClick={animalChosen}>
                            <h1 className="animal-bg ">{animal}</h1>
                            <div className="d-flex justify-content-evenly pt-4">
                                <img src={Heart} alt="" />
                                <img src={Knife} alt="" />
                            </div>
                            <div className="d-flex justify-content-around title-principal fs-1">
                                <p>{life}</p>
                                <p>{melee}</p>
                            </div>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};
