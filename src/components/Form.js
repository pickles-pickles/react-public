import React, { useState } from 'react';
import firebase from 'firebase';

const Form = () => {

    const [showSuccess, setShowSuccess] = useState(false);
    const [inputValue, setInputValue] = useState("");

 //Firebase info and init from HERE
 var firebaseConfig = {
    apiKey: "AIzaSyA9mqUdy5NnG8JG1neqZnqtMeZMUVb_FLs",
    authDomain: "reactfire-f3a21.firebaseapp.com",
    databaseURL: "https://reactfire-f3a21-default-rtdb.firebaseio.com",
    projectId: "reactfire-f3a21",
    storageBucket: "reactfire-f3a21.appspot.com",
    messagingSenderId: "635120956090",
    appId: "1:635120956090:web:9c70b0de9f058bbc5d8883"
};
// Initialize Firebase
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
var messagesRef = firebase.database().ref('messages');

function saveMessage(inputValue) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        inputValue: inputValue,
    });
}
// To HERE 

    const handleChange = (e) => {
        setInputValue(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( (inputValue !== "") ) {
            saveMessage(inputValue);
            setShowSuccess(true);
        }
        setInputValue("");
    }

    const SuccessButton = () => {
        return (
            <div className="row">
                <div className="col-12">
                    <button id="success-button"
                        className="btn btn-success" onClick={hideMessage}>Message sucessully submitted. Click to hide.</button>
                </div>
            </div>
        )
    }

    const hideMessage = () => {
        setShowSuccess(false);
    }

    return (
        <div>
            <form>
                <textarea className="form-control m-3" id="message-area-about"
                    cols="3" rows="6"
                    value={inputValue}
                    onChange={handleChange}
                ></textarea>
                <button className="btn btn-success d-block m-3"
                    onClick={handleSubmit} >Send Message</button>
            </form>
            { showSuccess ? <SuccessButton /> : null}
        </div>

    )
}

export default Form;