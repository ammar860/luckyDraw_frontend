<template>

  <div id="app">
    <router-view></router-view> <!-- All Website Screens -->
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>

/* Roboto Font */
/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  */
/* @import url('/assets/fonts/RobotoFont.css'); */

#app {
  font-family: 'Roboto', sans-serif;
}

/* Selected Text Style Start */
::-moz-selection { /* Code for Firefox */
  color: white;
  background: #191970;
}
::selection {
  color: white;
  background: #191970;
}
/* Selected Text Style End */

/* Scroll bar Style Start */
::-webkit-scrollbar {
  height: 5px; /* height of horizontal scrollbar */
  width: 5px; /* width of vertical scrollbar */
}

/* Track */
::-webkit-scrollbar-track {
  background: f4f4f4;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #009e1a;
  /* background: #42be57; */
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1dbe9c;
}
/* Scroll bar Style End */

/* Fade in animation Start */
.fade-in {
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
/* Fade in animation End */

</style>
