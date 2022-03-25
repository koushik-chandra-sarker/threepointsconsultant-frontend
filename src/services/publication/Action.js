import {
    PUBLICATION_LOADING, PUBLICATION_ERROR, PUBLICATION_SUCCESS
} from "../Types";
import axios from "axios";
import {SITE_URL} from "../../constants";

export const getPublication = (id)=> async dispatch =>{
    try {
        dispatch({
            type:PUBLICATION_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/publication/${id}`);
        dispatch({
            type:PUBLICATION_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PUBLICATION_ERROR
        })
    }
}
