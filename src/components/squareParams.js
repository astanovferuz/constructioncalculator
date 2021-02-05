import React from "react";
import { Input } from "reactstrap"
import { Link } from "react-router-dom";

const SquareParams = ({handleSizex, 
                        handleSizey, 
                        requestObject, 
                        resetVars, 
                        calculateData}) => {


    return(
        <div>
            <h5 className="text-center">Калькулятор цены конструкций</h5>
            <p className="text-center">Шаг 4</p>
            <h6 className="text-center">Длина стен (в метрах):</h6>
            <div className="col d-flex justify-content-center">
                <Input
                type="text"
                id="sizex"
                name="sizex"
                onChange={(e) => handleSizex(e)} 
                className="col-md-3 mr-1" />
                <span><i className="fa fa-times" /></span>
                <Input 
                type="text"
                id="sizey"
                name="sizey"
                onChange={(e) => handleSizey(e)}
                className="col-md-3 ml-1" />
            </div>
            <div className="col d-flex justify-content-center mt-3">
                <Link to="/" onClick={resetVars} className="btn btn-danger col-md-3 mx-1">Отмена</Link>
                <Link to="/result" onClick={() => calculateData(requestObject)} className="btn btn-success col-md-3 mx-1">Рассчитать</Link>
            </div>
        </div>
    )
}

export default SquareParams;