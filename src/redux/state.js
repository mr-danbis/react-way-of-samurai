import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 5, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 2, message: 'Hi! Hi!', likesCount: 10, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 3, message: 'Hi! How are you?', likesCount: 15, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 4, message: 'Hi! Hi!', likesCount: 20, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
        ],
        newPostText: '',
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Даник', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 2, name: 'Софа', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 3, name: 'Лиза', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 4, name: 'Андрей', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
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
            {id: 1, name: 'Даник', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\''},
            {id: 2, name: 'Софка', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\''}
        ]
    }
}


export  let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 49,
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let changeProfileMessage = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    rerenderEntireTree(state);
}

export let changeDialogsMessage = (postMessage) => {
    state.messagesPage.newMessagesText = postMessage;
    rerenderEntireTree(state);
}

export default state;