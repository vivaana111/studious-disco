const firebaseConfig = {
    apiKey: "AIzaSyCS96yqNTwRqBySyHfaE2tSvuop5u3Ex6U",
    authDomain: "twitter-dee9b.firebaseapp.com",
    databaseURL: "https://twitter-dee9b-default-rtdb.firebaseio.com",
    projectId: "twitter-dee9b",
    storageBucket: "twitter-dee9b.appspot.com",
    messagingSenderId: "870843439844",
    appId: "1:870843439844:web:f7f97f2772ece3a557aaf1"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ;
  document.getElementById("user_name").innerHTML = "Welcome back to Kwitter "+ user_name +"!" ;
  function addRoom(){
  room_name = document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name " 
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html" ;
  
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  });
  });
  }
  getData();
  function redirectToRoomName(name) { console.log(name); 
    localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
  }

  function logout()
  { 
      localStorage.removeItem("user_name"); 
  localStorage.removeItem("room_name");
  window.location = "index.html"; 
  }
  
  
  
  