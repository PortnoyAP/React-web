let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi how are you" , likesCount: 12},
                {id: 2, post: "It's my first post", likesCount: 15 } 
            ],
            newPostText: "ISRAEL"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Serega"},
                {id: 2, name: "Alesha"},
                {id: 3, name: "Misha"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Olesya"}
            ], 
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Ashkelon"},
                {id: 3, message: "Israel"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            newMessageText: "ISRAEL" 
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    addPost() {
        let newPost = {
            id:3,
            post: this._state.profilePage.newPostText,
            likesCount: 1000000
        };    
       this._state.profilePage.posts.push(newPost);
       this._state.profilePage.newPostText = '';
       this._callSubscriber(this._state);
    },
    updateNewText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id:6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateTextMessage(newText){
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;