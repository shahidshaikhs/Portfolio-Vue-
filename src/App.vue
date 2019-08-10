<template>
  <div id="app">
    <div class="wrapper" :class="(darkTheme) ? 'dark' : 'light'">
      <app-sidebar @changeTheme="changeTheme" :showDrawer="showDrawer" :darkTheme='darkTheme'></app-sidebar>
      <router-view @switchDrawer="switchDrawer" :darkTheme='darkTheme'/>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  data() {
    return {
      darkTheme: true,
      showDrawer: false
    };
  },
  components: {
    "app-sidebar": Sidebar
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
    },
    switchDrawer() {
      this.showDrawer = !this.showDrawer;
    }
  }
};
</script>
<style lang="scss">
body {
  font-family: "Poppins", sans-serif;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

.navbar {
  padding: 15px 10px;
  border: none;
  border-radius: 0;
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

.btn-info,
.btn-info:active,
.btn-info:hover {
  border: none !important;
  outline: none;
  background: none;
  box-shadow: none !important;
  color: #0c0c0c;
}

.dark {
  background: #0c0c0c !important;
  color: #fff !important;
}

.dark-light{
  background: #141414 !important;
  color: #fff !important;
}

.light {
  background: #FFF !important;
  color: #333 !important;
}

.light-faded{
  background: #3b7eeb !important;
  color: rgba(255, 255, 255, 0.8) !important;
}



</style>
