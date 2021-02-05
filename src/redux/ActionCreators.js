import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";

export const getResults = (calObject) => async dispatch => {

    const building = calObject.building;
    const height = calObject.height;
    const material = calObject.material;
    const sizex = calObject.sizex;
    const sizey = calObject.sizey;

    const response = await fetch(baseUrl + `building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`);
    const result = await response.json();
    const data = await result;

    dispatch(getApiData(data));

}

const getApiData = data => ({
    type: ActionTypes.GET_CALCULATIONS,
    payload: data
})