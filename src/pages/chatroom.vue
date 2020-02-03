<template>
  <f7-page bg-color="navbar" name="chatroom">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-row>
        <f7-button fill raised login-screen-open="#my-login-screen" class="margin-left">Login</f7-button>
        <f7-button fill raised popup-open="#my-popup" @click="alertSignoutData">Logout</f7-button>
      </f7-row>
      <f7-nav-title-large sliding class="text-align-center">Chatroom</f7-nav-title-large>
    </f7-navbar>
    <f7-button fill raised login-screen-open="#my-login-screen" class="margin-left">Login</f7-button>
    <!-- displays the firechat -->
    <div class="container">
    <div id="firechat-wrapper"></div>
    </div>
    
  </f7-page>
</template>

<script>
import routes from "../js/routes";
import app from "../components/app.vue";
import firebase from "firebase";
import firebaseApp from "../js/firebaseInit";

export default {
  data() {
    return {
    };
  },
  created() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      // Once authenticated, instantiate Firechat with the logged in user
      if (user) {
        //this.showme = true;
        initChat(user);
        // // creates a user on log-in DO NOT UNCOMMENT UNLESS YOU WANT TO MAKE A NEW ACCOUNT
        // //userupdate was needed to set the firebase displayname
        //     user.updateProfile({
        //       displayName: "Mr Tester2"
        //     })
        //     .then(
        //       function() {
        //         // Profile updated successfully!
        //         // "Jane Q. User"
        //         var displayName = user.displayName;
        //         console.log(user.displayName)
        //       },
        //       function(error) {
        //         // An error happened.
        //       }
        //     );

        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
    function initChat(user) {
      // Get a Firebase Database ref
      var chatRef = firebase.database().ref("chat");
      // Create a Firechat instance
      var chatUi = new FirechatUI(
        chatRef,
        document.getElementById("firechat-wrapper")
      );
      let chat = chatUi._chat;
      // Set the Firechat user
      chatUi.setUser(user.uid, user.displayName);
    }
  },

  methods: {
    alertSignoutData() {
      firebase
        .auth()
        .signOut()
        .then(function() {
        })
        .catch(function(error) {
          // An error happened.
          //kinda signs out
        });
    }
  }
};
</script>

<style>

</style>