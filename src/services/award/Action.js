import {
    AWARD_ERROR,
    AWARD_LOADING,
    AWARD_SUCCESS,
    AWARDS_ERROR,
    AWARDS_LOADING,
    AWARDS_SUCCESS,
} from "../Types";
import axios from "axios";
import {SITE_URL} from "../../constants";

export const getAwardList = (categoryId)=> async dispatch =>{
    try {
        dispatch({
            type:AWARDS_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/award`);
        dispatch({
            type:AWARDS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:AWARDS_ERROR
        })
    }
}
export const getAward = (id)=> async dispatch =>{
    try {
        dispatch({
            type:AWARD_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/award/${id}`);
        dispatch({
            type:AWARD_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:AWARD_ERROR
        })
    }
}