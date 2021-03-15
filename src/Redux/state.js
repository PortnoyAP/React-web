import { rerenderEntireTree } from "../render";


let state = {
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
        ] 
    }
}


export let addPost = () => {

     let newPost = {
         id:3,
         post: state.profilePage.newPostText,
         likesCount: 1000000
     };    

    state.profilePage.posts.push(newPost);
    state.profilePage.post.push('');
    rerenderEntireTree(state);
}


export let updateNewText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;