import React from "react";
import { Link } from "react-router-dom";

const ComponentResult = ({resetVars, data}) => {
    return(
        <div>
            <h5 className="text-center">Калькулятор цены конструкций</h5>
            <p className="text-center">Результаты рассчета</p>
            <h6 className="text-center">{data.result === "ok" ? "Успешно" : "Ошибка"}</h6>
            <div className="col d-flex justify-content-center">
                <h6 className={data.result !== "ok" ? "text-danger" : "text-success"}>{data.message}</h6>
            </div>
            <div className="col d-flex justify-content-center">
            <Link to="/" onClick={resetVars} className="btn btn-primary col-md-6 mx-1">Новый расчет</Link>
            </div>
        </div>
    )
}

export default ComponentResult;