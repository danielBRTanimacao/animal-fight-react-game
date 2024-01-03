import React from "react";

export default ({ isOpen, setOpenModal, title, children }) => {
    if (isOpen) {
        return (
            <>
                <section className="modal-back">
                    <div className="container-modal">
                        <div className="d-flex">
                            <div>
                                <h1>{title}</h1>
                            </div>
                            <div className="ms-5">
                                <button
                                    className="btn btn-game px-3"
                                    onClick={setOpenModal}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div className="fs-3 pt-5">{children}</div>
                    </div>
                </section>
            </>
        );
    }

    return null;
};
