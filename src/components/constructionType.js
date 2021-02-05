import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ConstructionType = ({selectBuilding, resetVars}) => {
    return(
        <div>
            <h5 className="text-center">Калькулятор цены конструкций</h5>
            <p className="text-center">Шаг 1</p>
            <h6 className="text-center">Что будем строить?</h6>
            <div className="col d-flex justify-content-center">
                <ul>
                    <li><Link onClick={() => selectBuilding(1)} to="/storeycount">Жилой дом</Link></li>
                    <li><Link onClick={() => selectBuilding(2)} to="/storeycount">Гараж</Link></li>
                </ul>
            </div>
            <div className="col d-flex justify-content-center">
            <Link to="/" onClick={resetVars} className="btn btn-danger col-md-4 mx-1">Отмена</Link>
            <Button color="success" className="col-md-4 mx-1">Далее</Button>
            </div>
        </div>
    )
}

export default ConstructionType;