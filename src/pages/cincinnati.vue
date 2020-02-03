<template>
  <f7-page bg-color="navbar" name="cincinnati">
    <f7-navbar :title="clubInformation.title" back-link="Back">{{clubInformation[9]}}</f7-navbar>
    <f7-block-title >About {{clubInformation[9]}}</f7-block-title> <!-- [0] -->
    <f7-list>
      <f7-list-item>
        {{clubInformation[9]}} is located in {{clubInformation[8]}} on {{clubInformation[0]}}. They play in the {{clubInformation[7]}}.
      </f7-list-item>
    </f7-list>
    <f7-block strong>
      <div class="container">
        <div class="row">
              <h2>Game Stats</h2>
      <table>
      <thead>
        <tr>
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
        <tr>
          <td>{{clubInformation[10]* 3 + clubInformation[1] * 1}}</td>
          <td>{{clubInformation[10]}}</td>
          <td>{{clubInformation[4]}}</td>
          <td>{{clubInformation[1]}}</td>
          <td>{{clubInformation[3]}}</td>
          <td>{{clubInformation[2]}}</td>
          <td>{{clubInformation[11]}}</td>
          <td>{{clubInformation[6]}}</td> 
        </tr>
      </tbody>
      </table>
      </div>
      </div>
    </f7-block>
      <f7-block strong>
<div class="container">
  <div class="row">
    <h2> Player Statistics </h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Yellow Cards</th>
              <th>Red Cards</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in clubInformation[5]"
            :key="player.id">
              <td>{{player.playerName}}</td>
              <td>{{player.position}}</td>
              <td>{{player.goals}}</td>
              <td>{{player.assists}}</td>
              <td>{{player.yellowCards}}</td>
              <td>{{player.redCards}}</td>
            </tr>
          </tbody>
        </table>
</div>
    </div>
      
    </f7-block>
  </f7-page>
</template>
<script>
  
import routes from '../js/routes';
import app from '../components/app.vue';
import firebaseApp from '../js/firebaseInit';
import firebase from 'firebase';

  
  
  export default {
    data: function () {
      return {
        clubInformation: [],
      
    }
},
// // calling firebase data on every page
    async created() {
      const database = firebase.database(); // retrieve data 
      await database.ref("/leagueData/clubs/CL003/")
      .once('value')
      .then(snapshot => {
        snapshot.forEach(snapshot => {
          let clubs = snapshot.val();
          this.clubInformation.push(clubs); 
        })
      })
    }, 
  };
</script>

<style>
.gameTable h2{
text-align: center;
}
</style>