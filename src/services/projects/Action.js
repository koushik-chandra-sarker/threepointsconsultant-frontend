import {
    PROJECT_ERROR,
    PROJECT_LOADING,
    PROJECT_SUCCESS,
    PROJECTS_ERROR,
    PROJECTS_LOADING,
    PROJECTS_SUCCESS
} from "../Types";
import axios from "axios";
import {SITE_URL} from "../../constants";

export const getProjectList = (categoryId)=> async dispatch =>{
    try {
        dispatch({
            type:PROJECTS_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/projects/?category=${categoryId}`);
        dispatch({
            type:PROJECTS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PROJECTS_ERROR
        })
    }
}
export const getProject = (id)=> async dispatch =>{
    try {
        dispatch({
            type:PROJECT_LOADING
        })
        const response = await axios.get(`${SITE_URL}/api/site/projects/${id}`);
        dispatch({
            type:PROJECT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PROJECT_ERROR
        })
    }
}