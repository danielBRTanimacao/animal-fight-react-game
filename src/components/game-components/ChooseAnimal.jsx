import SnakeAnimal from "../../assets/imgs/sprites-animals/snake.png";

export default () => {
    return (
        <>
            <header>
                <h1>Escolha um animal</h1>
            </header>
            <section>
                <div>
                    <button className="btn">
                        <img src={SnakeAnimal} alt="img-animal" />
                    </button>
                </div>
            </section>
        </>
    );
};
