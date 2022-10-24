
const RedditReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LINK':
            return {
                ...state,
                posturl: action.payload,
            }
        case 'GET_JOKE':
            return {
                ...state,
                jokes: action.payload,
                jokeLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SET_JOKELOADING':
            return {
                ...state,
                jokeLoading: true
            }
        case 'GET_POSTANALYTICS':
            return {
                ...state,
                postDetail: action.payload,
                loading: false,
                dataReady: true
            }
        case 'CLEAR_POSTURL':
            return {
                ...state,
                posturl: '',  
                postDetail: []         
            }
    
        default:
            return state;
    }
}

export default RedditReducer