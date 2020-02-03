<template>
  <f7-app  class="color-theme-green" :params="f7params">
    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom>
        <f7-link tab-link="#view-home" tab-link-active icon-md="material:home" text="Home"></f7-link>
        <f7-link tab-link="#view-clubs" icon-md="material:insert_charts" text="Clubs"></f7-link>
        <f7-link tab-link="#view-gameInfo" icon-md="material:info" text="Game Info"></f7-link>
        <f7-link tab-link="#view-chatroom" icon-md="material:forum" text="Chatroom"></f7-link>
        <f7-link tab-link="#view-contact" icon-md="material:contacts" text="Contact"></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Clubs View -->
      <f7-view id="view-clubs" name="clubs" tab url="/clubs/"></f7-view>

      <!-- GamInfo View -->
      <f7-view id="view-gameInfo" name="gameInfo" tab url="/gameInfo/"></f7-view>

      <!-- Chatroom View -->
      <f7-view id="view-chatroom" name="chatroom" tab url="/chatroom/"></f7-view>

      <!-- Contact View -->
      <f7-view id="view-contact" name="contact" tab url="/contact/"></f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>You are logged out.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="email"
              placeholder="email@email.com"
              :value="email"
              @input="email = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>

            <f7-block-footer>
              Fill in your email and password to sign in.
              <br />Click "Sign In" to close Login Screen.
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import routes from "../js/routes.js";
import firebase from "firebase";
import firebaseApp from "../js/firebaseInit";
var firebaseui = require("firebaseui");

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
// The start method will wait until the DOM is loaded.
ui.start('#firechat-wrapper', uiConfig);

var user = firebase.auth().currentUser;
// should retrieve firebase data from here and export it to every page, didn't know how/couldn't make it work
export default {
  data() {
    return {
      currentUser: "",

      // Framework7 Parameters
      f7params: {
        name: "soccer", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes
      },

      // Login screen data
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    // log in function
    alertLoginData() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

      this.getUser;
      this.$f7.dialog.alert(
        "Email: " +
          this.email +
          "<br>Password: " +
          this.password +
          this.currentUser
      );
    },
    alertSignoutData() {
      firebase
        .auth()
        .signOut()
        .then(function() {})
        .catch(function(error) {
          // An error happened.
        });
    }
  },
  computed: {
    getUser() {
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
  }
};
</script>