let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 5, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 2, message: 'Hi! Hi!', likesCount: 10, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 3, message: 'Hi! How are you?', likesCount: 15, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 4, message: 'Hi! Hi!', likesCount: 20, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
        ]
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Даник', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 2, name: 'Софа', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 3, name: 'Паша', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {id: 4, name: 'Маша', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'My name is Daniel'},
        ],
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

export default state;