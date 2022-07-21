<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
      <SideBar></SideBar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    SideBar
  }
}
</script>

<style>
#home {
  background-color: #73a1cf;
}
#sidebar {
  background-color: #73a1cf;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 90px 0 0;
  z-index: 99;
}
.container {
  margin-bottom: 15vh;
  margin-left: 10vw;
}
#list-movie {
  margin-left: 8vh;
}
#movie-card {
  margin-left: 20vh;
  margin-right: 20vh;
  width: auto;
}
</style>
