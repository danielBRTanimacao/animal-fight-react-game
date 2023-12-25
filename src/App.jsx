export default () => {
    return (
        <>
            <section className="pt-5">
                <div className="container text-center bg-secondary rounded mt-5 p-4">
                    <h1>Animal fight</h1>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary">jogar</button>
                        <button className="btn btn-primary" disabled>
                            Opções
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
