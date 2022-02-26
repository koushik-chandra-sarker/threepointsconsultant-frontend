import {
    PROJECT_ERROR,
    PROJECT_LOADING,
    PROJECT_SUCCESS,
    PROJECTS_ERROR,
    PROJECTS_LOADING,
    PROJECTS_SUCCESS
} from "../Types";

const projectsState = {
    loading: false,
    data: [],
    error: ""
}

const ProjectsReducer = (state = projectsState, action) => {
    switch (action.type) {
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PROJECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Site"
            }
        default:
            return state;
    }
}


const projectState = {
    loading: false,
    data: {},
    error: ""
}

const ProjectReducer = (state = projectState, action) => {
    switch (action.type) {
        case PROJECT_LOADING:
            return {
                ...state,
                loading: true
            }
        case PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PROJECT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Site"
            }
        default:
            return state;
    }
}

export {ProjectsReducer, ProjectReducer};