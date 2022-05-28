const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    usersData: [
        { id: 1, name: 'Person 1' },
        { id: 2, name: 'Person 2' },
        { id: 3, name: 'Person 3' },
    ],

    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Good bye!' },
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: action.message }],
            };
        default:
            return state;
    }
}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;