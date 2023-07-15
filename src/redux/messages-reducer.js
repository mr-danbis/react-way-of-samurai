const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_DIALOG_MESSAGE = 'CHANGE-DIALOG-MESSAGE';
const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = {
                id: 4,
                message: state.newMessagesText,
            };
            state.messages.push(newMessage);
            state.newMessagesText = '';
            return state;
        }
        case CHANGE_DIALOG_MESSAGE : {
            state.newMessagesText = action.newText;
            return state;
        }
        default : {
            return state;
        }
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeDialogMessageActionCreator = (text) => ({type: CHANGE_DIALOG_MESSAGE, newText: text});
export default messagesReducer;