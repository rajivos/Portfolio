import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import  contactReducer  from './contactReducer'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    contact: contactReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer

});

export default rootReducer;