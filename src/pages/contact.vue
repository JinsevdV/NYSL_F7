<template>
  <f7-page bg-color="navbar" name="contact">
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
      <f7-nav-title-large sliding class="text-align-center" >Contact</f7-nav-title-large>
    </f7-navbar>
<body>
  <div class="opacity">
    <div class="backgroundFiller">
    <!-- Page content-->
    <p>If you would like to contact us, please fill in the Contact Form below and we will reply to you as soon as possible.</p>
    <p>You can also call us at working days from 9 a.m. to 5 p.m. at this phonenumber <a class="external" href="tel:123-456-7890">123-456-7890</a></p>
</div>
    <f7-block-title class="text-align-center">
      <h3>Contact Form</h3>
      </f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>
​
      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></f7-list-input>
​
      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></f7-list-input>
​
      <f7-list-input
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
        <option>Apache</option>
      </f7-list-input>
​
      <f7-list-input
        type="textarea"
        label="Your question"
        placeholder="Your question here"
        resizeable
      ></f7-list-input>
    </f7-list>
      <f7-row tag="p">
        <f7-button class="col" round fill>Submit Form</f7-button>
      </f7-row>
      </div>
​</body>
  </f7-page>
</template>
<script>
export default {
data() {
    return {}
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
  p{
    text-align: center;
    font-size: 20;
  }
  
  
</style>