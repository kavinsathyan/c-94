
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDXyJih_QJamc7KFfU6bVYiz633dlsnD1Q",
    authDomain: "kwitter-app-96c6a.firebaseapp.com",
    databaseURL: "https://kwitter-app-96c6a-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-96c6a",
    storageBucket: "kwitter-app-96c6a.appspot.com",
    messagingSenderId: "644020362086",
    appId: "1:644020362086:web:92cec17759fa73504006a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })
  }