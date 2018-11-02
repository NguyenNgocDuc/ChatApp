import React, { Component } from 'react';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey:'AIzaSyCSc5nrGUK5QO4nhkRMIwAaMNOlAIt_zh4',
  authDomain:'chatapp-6ddf3.firebaseapp.com'
})

export default class Account extends Component {
  state={
    isSignedin: false,
  }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks:{
      signInSuccess:() => false
    }  
  }

  componentDidMount = ()=>{
    

    firebase.auth().onAuthStateChanged(user=>{
      this.setState({
        isSignedin:!!user
      })
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.isSignedin?
          (<div>Signed In!!!</div>)
          :
          (<StyledFirebaseAuth uiConfig={this.uiConfig} 
          firebaseAuth={firebase.auth()}/>
        )}
      </div>
    );
  }
}
/*
<button onclick = "googleSignin()">Google Signin</button>
<button onclick = "googleSignout()">Google Signout</button>
var provider = new firebase.auth.GoogleAuthProvider();
function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
  
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}
*/