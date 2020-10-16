export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove when you finish developing!!!
    // token: "BQCpOQylELJ9iSlbniiBEm_8QjWDaActx7tXaBsLA7rNWveLwCuysQ64IzbM7DhHHSHCQV3a9tHod1aPFTmw7i-ls8MXl2m1Sq1GxrOp01qITLUE7n_blP6fNp66uYn3X5pgvh5gwc8E-i8Y_NSqY160y2zr"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type){

        case 'SET_USER' :
        return {
            ...state, 
            user: action.user
        };

        case 'SET_TOKEN' :
        return {
            ...state,
            token: action.token
        }

        case 'SET_PLAYLISTS' :
        return {
            ...state,
            playlists: action.playlists
        }
        
        case 'SET_DISCOVER_WEEKLY' :
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }
        default:
            return state;
    }

}

    export default reducer;