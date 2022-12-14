
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
        case 'BESTOF_POSTS':
            return {
                ...state,
                posts: action.payload,
                postsLoading: false       
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
        case 'SET_POSTSLOADING':
            return {
                ...state,
                postsLoading: true
            }        
        default:
            return state;
    }
}

export default RedditReducer