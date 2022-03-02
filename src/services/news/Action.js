import {
    NEWS_LOADING, NEWS_ERROR, NEWS_SUCCESS, NEWS_LIST_SUCCESS, NEWS_LIST_ERROR, NEWS_LIST_LOADING,
} from "../Types";
import axios from "axios";
import {SITE_URL} from "../../constants";

export const getNewsList = ()=> async dispatch =>{
    try {
        dispatch({
            type:NEWS_LIST_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/news`);
        dispatch({
            type:NEWS_LIST_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:NEWS_LIST_ERROR
        })
    }
}
export const getNews = (id)=> async dispatch =>{
    try {
        dispatch({
            type:NEWS_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/news/${id}`);
        dispatch({
            type:NEWS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:NEWS_ERROR
        })
    }
}
