<template>

  <f7-page bg-color="navbar" id="home" name="home">
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
        >NYSL APP</f7-nav-title-large>
    </f7-navbar>
    <!-- Page content-->
  <div class="container" >
     <div class="row">
       <h2 class="header">League Statistics</h2>
    <table>
      <thead>
        
        <tr>
          <th>Team</th>
          <th>Points</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Draws</th>
          <th>Goals Made</th>
          <th>Goals Against</th>
          <th>Yellow Cards</th>
          <th>Red Cards</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in leagueInformation[0]" :key="item.id">
          <td>{{ item.teamName }}</td>
          <td>{{ item.wins * 3 + item.draws * 1}}</td>
          <td>{{ item.wins }}</td>
          <td>{{ item.losses }}</td>
          <td>{{ item.draws }}</td>
          <td>{{ item.goalsMade }}</td>
          <td>{{ item.goalsAgainst }}</td>
          <td>{{ item.yellowCards }}</td>
          <td>{{ item.redCards }}</td>
        </tr>
      </tbody>
    </table>
      </div>
    <!-- <div id="legendButton">
          <button class="btn-default" data-toggle="collapse" data-target="#legend">Legend</button>
        </div>
        <p id="legend" class="collapse"> P = Points<br>W = Wins<br>L = Losses<br>D = Draws<br>GM = Goals Made<br>GA = Goals Against<br>Y = Yellow Cards<br>R = Red Cards </p> -->
    </div>

    <div class="container">
      <div class="row">
  <h2 class="header">Next Matches</h2>
    <table class="table">
        <thead>
          
        <tr>
          <th>Home team</th>
          <th>Away team</th>
          <th>Location</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in leagueInformation[3]" :key="item.id" > 
          <td>{{ item.homeTeam }} </td>
          <td>{{ item.awayTeam }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
</div>
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
      leagueInformation: [],
      
    };
    
  },
  // calling firebase data on every page
 async created() {
    const database = firebase.database(); // retrieve data
  await  database
      .ref("/leagueData/")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(snapshot => {
          let league = snapshot.val();
          this.leagueInformation.push(league); //push data to leagueInformation
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
      },
   }


};
</script>
<style>






</style>