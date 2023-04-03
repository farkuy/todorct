import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    const [clickNewTusk, setClickNewTusk] = useState(`nav-link active`);
    const [clickOldTusk, setClickOldTusk] = useState(`nav-link`);
    const [clickFinishTusk, setClickFinishTusk] = useState(`nav-link`);

    const clN = () => {
        setClickNewTusk(`nav-link active`);
        setClickOldTusk(`nav-link`)
        setClickFinishTusk(`nav-link`)
    }

    const clO = () => {
        setClickOldTusk(`nav-link active`);
        setClickNewTusk(`nav-link`)
        setClickFinishTusk(`nav-link`)

    }

    const clF = () => {
        setClickFinishTusk(`nav-link active`);
        setClickNewTusk(`nav-link`)
        setClickOldTusk(`nav-link`)
    }

    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <div href className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">Твой список квестов</span>
            </div>

            <ul className="nav nav-pills">
                <Link
                    onClick={clN}
                    className={clickNewTusk}
                    to="/tusk"
                >
                    Новые
                </Link>
                <Link
                    onClick={clO}
                    className={clickOldTusk}
                    to="/downTusk"
                >
                    Проваленные
                </Link>
                <Link
                    to="/finish"
                    className={clickFinishTusk}
                    onClick={clF}
                >
                    Вполненные
                </Link>
            </ul>
        </header>
    );
};

export default Header;