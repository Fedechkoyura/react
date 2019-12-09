let callSubscribe;

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addMessage = 'ADD-MESSAGE';
const updateMessage = 'UPDATE-MESSAGE';

let store = {
	_state: {
		dialogsPage: {
			dialogsData: [
				{id: '1', name: 'Oleg'},
				{id: '2', name: 'Adnrew'},
				{id: '3', name: 'Ihor'},
				{id: '4', name: 'Denis'},
				{id: '4', name: 'Denis'},
				{id: '5', name: 'Dima'},
				{id: '6', name: 'Olya'},
			],
			messageData: [
				{id: '1', text: 'First text and i LOve React'},
				{id: '2', text: 'Second text'},
				{id: '3', text: 'NEw text fot test'},
				{id: '4', text: 'And another text'},
				{id: '5', text: 'What u want ?'}
			],
			addNewMessage: ''
		},
		profilePage: {
			postsData: [
				{id: '1', text: 'First massege', like: '23'},
				{id: '2', text: 'Second massege', like: '54'},
				{id: '3', text: 'Third massege', like: '1'},
				{id: '4', text: 'Third massege', like: '25'},
				{id: '5', text: 'Third massege', like: '13'},
			],
			newPostAdd: ''
		},
	},
	getState(){
		return this._state;
	},

	subscribe(observer) {
		callSubscribe = observer;
	},

	dispatch(action) {
		if (action.type === addPost){
			let newPost = {
				id: '6',
				text: this.getState().profilePage.newPostAdd,
				like: '0'
			};

			this.getState().profilePage.postsData.push(newPost);
			this.getState().profilePage.newPostAdd = '';
			callSubscribe(this.getState());
		} else if (action.type === updateNewPostText){
			this.getState().profilePage.newPostAdd = action.newText;
			callSubscribe(this.getState());
		} else if (action.type === addMessage) {
			let newPost = {
				id: '6',
				text: this.getState().dialogsPage.addNewMessage
			};

			this.getState().dialogsPage.messageData.push(newPost);
			this.getState().dialogsPage.addNewMessage = '';
			callSubscribe(this.getState());
		} else if (action.type === updateMessage) {
			this.getState().dialogsPage.addNewMessage = action.newText;
			callSubscribe(this.getState());
		}
	}
}

export const addPostActionCreator = () => ({ type: addPost });

export const onchangeTextActionCreator = (text) => ({ 
	type: updateNewPostText, newText: text
});

export const addMessageActionCreator = () => ({ type: addMessage });
export const updateMessageActionCreator = (text) => ({ type: updateMessage, newText: text });

export default store;