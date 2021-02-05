import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ConMaterial = ({selectMaterial, resetVars, building}) => {
    return(
        <div>
            <h5 className="text-center">Калькулятор цены конструкций</h5>
            <p className="text-center">Шаг 3</p>
            <h6 className="text-center">Материал стен:</h6>
            <div className="col d-flex justify-content-center">
                {building === 1 ? 
                <ul>
                    <li><Link onClick={() => selectMaterial(1)} to="/squareparams">Кирпич</Link></li>
                    <li><Link onClick={() => selectMaterial(2)} to="/squareparams">Шлакоблок</Link></li>
                    <li><Link onClick={() => selectMaterial(3)} to="/squareparams">Деревянный брус</Link></li>
                </ul>    
                : 
                <ul>
                    <li><Link onClick={() => selectMaterial(2)} to="/squareparams">Шлакоблок</Link></li>
                    <li><Link onClick={() => selectMaterial(4)} to="/squareparams">Металл</Link></li>
                    <li><Link onClick={() => selectMaterial(5)} to="/squareparams">Сендвич Панели</Link></li>
                </ul>
                }
            </div>
            <div className="col d-flex justify-content-center">
            <Link to="/" onClick={resetVars} className="btn btn-danger col-md-4 mx-1">Отмена</Link>
            <Button color="success" className="col-md-4 mx-1">Далее</Button>
            </div>
        </div>
    )
}

export default ConMaterial;