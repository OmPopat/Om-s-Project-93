
const firebaseConfig = {
      apiKey: "AIzaSyA_mcTN_GiJF_sREqwM6aZrG_zaNBMHyU8",
      authDomain: "c93-kwitter-37fb0.firebaseapp.com",
      databaseURL: "https://c93-kwitter-37fb0-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-37fb0",
      storageBucket: "c93-kwitter-37fb0.appspot.com",
      messagingSenderId: "270724806524",
      appId: "1:270724806524:web:e8eeaf7f71c594423496f9"
    };

    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
