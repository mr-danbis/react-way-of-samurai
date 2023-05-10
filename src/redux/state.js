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
            {id: 1, name: 'Даник'},
            {id: 2, name: 'Софа'},
            {id: 3, name: 'Паша'},
            {id: 4, name: 'Маша'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'My name is Daniel'},
        ],
     }
}

export default state;