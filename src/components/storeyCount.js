import React from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";

const StoreyCount = ({handleHeight, resetVars, building, height}) => {
    return(
        <div>
            <h5 className="text-center">Калькулятор цены конструкций</h5>
            <p className="text-center">Шаг 2</p>
            <h6 className="text-center">Количество этажей (число)</h6>
            <div className="col d-flex justify-content-center">
                <Input 
                type="text" 
                id="height" 
                onChange={(e) => handleHeight(e)} 
                name="height" 
                className="col-md-4" 
                value={building === 2 ? 1 : height}
                disabled={building === 2 ? true : false}
                />
            </div>
            <div className="col d-flex justify-content-center mt-3">
            <Link to="/" onClick={resetVars} className="btn btn-danger col-md-4 mx-1">Отмена</Link>
            <Link to="/conmaterial" className="btn btn-success col-md-4 mx-1">Далее</Link>
            </div>
        </div>
    )
}

export default StoreyCount;