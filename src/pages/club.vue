<template>
  <f7-page name="club">
    <f7-navbar :title="club.title" back-link="Back"></f7-navbar>
    <f7-block-title>About {{club.title}}</f7-block-title>
    <f7-block strong>
      {{club.description}}
    </f7-block>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      var clubId = this.$f7route.params.id;
      var currentClub;
      this.$f7.data.clubs.forEach(function (club) {
        if (club.id === clubId) {
          currentClub = club;
        }
      });
      return {
        club: currentClub,
      };
    }
  };
</script>