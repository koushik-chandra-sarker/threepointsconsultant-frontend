import {
    PUBLICATION_ERROR,
    PUBLICATION_LOADING, PUBLICATION_SUCCESS

} from "../Types";

const publicationState = {
    loading: false,
    data: [],
    error: ""
}

const PublicationReducer = (state = publicationState, action) => {
    switch (action.type) {
        case PUBLICATION_LOADING:
            return {
                ...state,
                loading: true
            }
        case PUBLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PUBLICATION_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Publication"
            }
        default:
            return state;
    }
}

export {PublicationReducer};