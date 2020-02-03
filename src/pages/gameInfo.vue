<template>
  <f7-page bg-color="navbar" name="gameInfo">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-row>
        <f7-button fill raised login-screen-open="#my-login-screen" class="margin-left">Login</f7-button>
        <f7-button fill raised popup-open="#my-popup" @click="alertSignoutData">Logout</f7-button>
      </f7-row>
      <f7-nav-title-large sliding class="text-align-center">Game Info</f7-nav-title-large>
    </f7-navbar>
  
        <div class="container">
          <div class="row">
        <h2>Next Matches</h2>
        <table  v-if="league.length > 0">
          <thead>
            
            <tr>
              <th>Home team</th>
              <th>Away team</th>
              <th>Location</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in league[1].nextMatch" :key="item.id">
              <td>{{ item.homeTeam }}</td>
              <td>{{ item.awayTeam }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
     
    
    <div class="container">
      <div class="row">
        <h3>Match Round One</h3>
      <table v-if="league.length > 0">
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Goals Home</th>
            <th>Goals Away</th>
            <th>Away Team</th>
            <th>Yellow cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in league[1].matchRoundOne" :key="item.id">
            <td>{{ item.homeTeam }}</td>
            <td>{{item.goalsHome}}</td>
            <td>{{item.goalsAway}}</td>
            <td>{{item.awayTeam}}</td>
            <td>{{item.yellowCards}}</td>
            <td>{{item.redCards}}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>



      <div class="container">
        <div class="row">
          <h3>Match Round Two</h3>
      <table  v-if="league.length > 0">
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Goals Home</th>
            <th>Goals Away</th>
            <th>Away Team</th>
            <th>Yellow cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in league[1].matchRoundTwo" :key="item.id">
            <td>{{ item.homeTeam }}</td>
            <td>{{item.goalsHome}}</td>
            <td>{{item.goalsAway}}</td>
            <td>{{item.awayTeam}}</td>
            <td>{{item.yellowCards}}</td>
            <td>{{item.redCards}}</td>
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
      league: []
    };
  },
// calling firebase data on every page
  async created() {
    const database = firebase.database(); // retrieve data
    await database
      .ref()
      .once("value")
      .then(snapshot => {
        // console.log(snapshot)
        snapshot.forEach(snapshot => {
          let leagueInfo = snapshot.val();
          this.league.push(leagueInfo);
        });
        //console.log(this.league[0].nextMatchHome);
      });
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
