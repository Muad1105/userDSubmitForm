import ActionButtonEvents  from './events';

const initialState = {
    actionTriggered: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionButtonEvents.TRIGGER_ACTION_BUTTON:
            return {
                ...state,
                actionTriggered: true
            };
        case ActionButtonEvents.CLEAR_TRIGGER_ACTION_BUTTON:
            return {
                ...state,
                actionTriggered: false
            };
        default:
            return state;
    }
}
export default reducer;