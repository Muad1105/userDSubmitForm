import Events  from './events';

const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Events.LOAD_USER + '_FULFILLED':
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}

export default reducer;