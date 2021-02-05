import React, { useState } from "react";
import ConstructionType from "./constructionType";
import StoreyCount from "./storeyCount";
import ConMaterial from "./conMaterial";
import SquareParams from "./squareParams";
import ComponentResult from "./componentResult";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getResults } from "../redux/ActionCreators";


const Main = () => {

    const state = useSelector(state => state.conReducer.inData);
    const dispatch = useDispatch();

    const [building, setBuilding] = useState("");
    const [height, setHeight] = useState("");
    const [material, setMaterial] = useState("");
    const [sizex, setSizex] = useState("");
    const [sizey, setSizey] = useState("");

    const requestObj = {
        building,
        height,
        material,
        sizex,
        sizey
    }

    const selectBuilding = num => {
        setBuilding(+num)
    }

    const handleHeight = (e) => {
        setHeight(+e.target.value);
    }

    const handleSizex = (e) => {
        setSizex(+e.target.value);
    }

    const handleSizey = (e) => {
        setSizey(+e.target.value);
    }

    const selectMaterial = (num) => {
        setMaterial(+num)
    }

    const resetVars = () => {
        setBuilding("");
        setHeight("");
        setMaterial("");
        setSizex("");
        setSizey("");
    }

    const calculateData = (obj) => {
        dispatch(getResults(obj))
    }

    return(
        <div>
            <Switch>
                <Route exact path="/" render={() => <ConstructionType resetVars={resetVars} selectBuilding={selectBuilding} />} />
                <Route exact path="/storeycount" render={() => <StoreyCount resetVars={resetVars} handleHeight={handleHeight} building={building} height={height}/> } />
                <Route exact path="/conmaterial" render={() => <ConMaterial resetVars={resetVars} selectMaterial={selectMaterial} building={building}/>} />
                <Route exact path="/squareparams" render={() => <SquareParams resetVars={resetVars} handleSizex={handleSizex} handleSizey={handleSizey} calculateData={calculateData} requestObject={requestObj} />} />
                <Route exact path="/result" render={() => <ComponentResult data={state} resetVars={resetVars} />} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Main;