import React, { useState } from 'react'
import firebase from 'firebase'

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [inputValue, setInputValue] = useState('')

  //Firebase info and init from HERE
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
    storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  var messagesRef = firebase.database().ref('messages')

  function saveMessage (inputValue) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
      inputValue: inputValue
    })
  }
  // To HERE

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue !== '') {
      saveMessage(inputValue)
      setShowSuccess(true)
    }
    setInputValue('')
  }

  const SuccessButton = () => {
    return (
      <div className='row'>
        <div className='col-12'>
          <button
            id='success-button'
            className='btn btn-success'
            onClick={hideMessage}
          >
            Message sucessully submitted. Click to hide.
          </button>
        </div>
      </div>
    )
  }

  const hideMessage = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <form>
        <textarea
          className='form-control m-3'
          id='message-area-about'
          cols='3'
          rows='6'
          value={inputValue}
          onChange={handleChange}
        ></textarea>
        <button className='btn btn-success d-block m-3' onClick={handleSubmit}>
          Send Message
        </button>
      </form>
      {showSuccess ? <SuccessButton /> : null}
    </>
  )
}

export default Form
