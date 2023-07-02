var firebaseConfig = {
      apiKey: "AIzaSyAAxl2gL1MWQYS3L_i9_lLj-09QjOzGkEM",
      authDomain: "kwitter-app-a6105.firebaseapp.com",
      databaseURL: "https://kwitter-app-a6105-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a6105",
      storageBucket: "kwitter-app-a6105.appspot.com",
      messagingSenderId: "716628336475",
      appId: "1:716628336475:web:da4c84a260bb707a7c847e"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
