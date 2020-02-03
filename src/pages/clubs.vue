<template>
  <f7-page bg-color="navbar" name="clubs">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-row>
      
        <f7-button
          fill
          raised
          login-screen-open="#my-login-screen"
          class="margin-left"
          >Login</f7-button>
      <f7-button fill raised popup-open="#my-popup" @click="alertSignoutData">Logout</f7-button>
      </f7-row>
      <f7-nav-title-large sliding class="text-align-center"
        >Clubs</f7-nav-title-large
      >
    </f7-navbar>
    <!-- tried for a possibility to make it one list item that itterates over the clubNames -->
  <div class="bgcolor">
      <div class="opacity">
    <f7-list v-if="clubName.length > 0">
      <f7-list-item :link="`/atlanta/:id/`">
        {{ clubName[0].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/chicago/:id/`">
        {{ clubName[1].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/cincinnati/:id/`">
        {{ clubName[2].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/colorado/:id/`">
        {{ clubName[3].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/columbus/:id/`">
        {{ clubName[4].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/dcunited/:id/`">
        {{ clubName[5].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/dallas/:id/`">
        {{ clubName[6].teamName }}
      </f7-list-item>
      <f7-list-item :link="`/houston/:id/`">
        {{ clubName[7].teamName }}
      </f7-list-item>
    </f7-list>
    </div>
    </div>
  
  </f7-page>
</template>

<script>
import routes from "../js/routes";
import app from "../components/app.vue";
import firebaseApp from "../js/firebaseInit";
import firebase from "firebase";

export default {
  data() {
    return {
      clubName: [],
      teamName : '',
    };
  },
  // calling firebase data on every page
  async created() {
    const database = firebase.database(); // retrieve data
    await database
      .ref("/leagueData/clubs/")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(snapshot => {
          let clubs = snapshot.val();
          clubs.key = snapshot.key;
          this.clubName.push(clubs);
        });
      });
  },
  methods: { 
      alertSignoutData() {
          firebase.auth().signOut().then(function() {

        }).catch(function(error) {
        // An error happened.
        // kinda signs out
      });
      }
   }
};
</script>

<style>

</style>
