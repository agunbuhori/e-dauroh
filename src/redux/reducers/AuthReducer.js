const INITIAL_STATE = {
    authenticated: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { authenticated: true, ...action.payload};
        case 'LOGOUT':
            return { ...state, ...action.payload};
        default:
            return state;
    }
};