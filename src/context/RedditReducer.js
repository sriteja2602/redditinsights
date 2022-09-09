
const RedditReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case 'GET_JOKE':
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }
}

export default RedditReducer