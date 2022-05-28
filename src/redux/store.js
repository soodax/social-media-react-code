// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {

//     _state: {
//         profilePage: {
//             postsData: [
//                 { id: 1, message: 'Hello world!', likesCount: 7 },
//                 { id: 2, message: 'Lol lets talk about this', likesCount: 2 },
//                 { id: 3, message: 'Please delete this message(', likesCount: 12 },
//             ],

//             newPostText: '',
//         },

//         dialogsPage: {
//             usersData: [
//                 { id: 1, name: 'David' },
//                 { id: 2, name: 'Dima' },
//                 { id: 3, name: 'Valera' },
//             ],

//             messagesData: [
//                 {id: 1, message: 'Hello' },
//                 {id: 2, message: 'Good bye' },
//                 {id: 3, message: 'Yo!' },
//             ],
            
//             newMessageText: '',

//         },

//         sidebar: {
//             friendsData: [
//                 { name: 'John' },
//                 { name: 'Nick' },
//                 { name: 'Bob' },
//             ]
//         }
//     },

//     getState() {
//         return this._state;
//     },

//     renderEntireTree() {
//         console.log('state changed');
//     },

//     subscribe(observer) {
//         this.renderEntireTree = observer;
//     },

//     dispatch(action) {
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
//         this._state.profilePage = profileReducer(this._state.profilePage,action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar,action);
//         this.renderEntireTree(this._state);
//     }

// };

// export default store;