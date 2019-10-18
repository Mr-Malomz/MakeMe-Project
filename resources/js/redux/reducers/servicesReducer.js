import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE } from '../actions/servicesAction';

const initialState = {
    isLoading: false,
    servError: false,
    services: []
}

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                services: action.services
            }

        case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                isLoading: false,
                servError: true
            }
    
        default:
            return state;
    }
}