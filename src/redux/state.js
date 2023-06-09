let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 5, img:'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 2, message: 'Hi! Hi!', likesCount: 10, img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 3, message: 'Hi! How are you?', likesCount: 15, img:'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 4, message: 'Hi! Hi!', likesCount: 20, img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'}
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Даник', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 2, name: 'Софа', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 3, name: 'Лиза', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 4, name: 'Андрей', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'My name is Daniel'},
            ],
            newMessagesText: '',
        },
        sidebar: {
            navigation : [
                {link: '/profile', text: 'Profile'},
                {link: '/dialogs', text: 'Messages'},
                {link: '/news', text: 'News'},
                {link: '/music', text: 'Music'},
                {link: '/settings', text: 'Settings'}
            ],
            friends:[
                {id: 1, name: 'Даник', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'},
                {id: 2, name: 'Софка', img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 49,
                img: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "CHANGE-PROFILE-MESSAGE") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "CHANGE-DIALOG-MESSAGE") {
            this._state.messagesPage.newMessagesText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;