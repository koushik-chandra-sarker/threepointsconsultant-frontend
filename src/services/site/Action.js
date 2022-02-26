import {SITE_ERROR, SITE_LOADING, SITE_SUCCESS} from "../Types";
import axios from "axios";
import {SITE_URL} from "../../constants";

export const getSiteDetails = ()=> async dispatch =>{
    try {
        dispatch({
            type:SITE_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/all`);
        dispatch({
            type:SITE_SUCCESS,
            payload:response.data[0]
        })
    }catch (e) {
        dispatch({
            type:SITE_ERROR
        })
    }
}