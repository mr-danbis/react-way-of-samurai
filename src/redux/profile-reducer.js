const ADD_POST = 'ADD-POST';
const CHANGE_PROFILE_MESSAGE = 'CHANGE-PROFILE-MESSAGE';
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 49,
                img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case CHANGE_PROFILE_MESSAGE : {
            state.newPostText = action.newText;
            return state;
        }
        default : {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeProfileMessageActionCreator = (text) => ({type: CHANGE_PROFILE_MESSAGE, newText: text});
export default profileReducer;