import {SITE_ERROR,SITE_LOADING,SITE_SUCCESS} from "../Types";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const SiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SITE_LOADING:
            return {
                ...state,
                loading: true
            }
        case SITE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case SITE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Site"
            }
        default:
            return state;
    }
}

export default SiteReducer;