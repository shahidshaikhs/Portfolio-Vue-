<template>
  <div id="content" :class="(darkTheme) ? 'dark' : 'light'">
    <div class="content-inner" :class="(showDrawer) ? 'padding-left' : ''">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn btn-info"
            :class="(darkTheme) ? 'btn-info-dark' : 'btn-info-light'"
            @click="switchDrawer()"
          >
            <i class="fas fa-align-left"></i>
          </button>
        </div>
      </nav>
      <div class="container center-content">
        <div class="project-container">
          <h1 class="display-4 blue-gd text-gd">Pulse Website & Emails</h1>
          <h1 class="project-container-heading-2">
            Redesigned the Emails and Website for a company where users can know the status of the platform including Maintenance & Announcements. Both the website and the emails are
            <span class="underline-gd blue-gd">mobile responsive</span> and were made using CSS preprocessor named
            <span class="underline-gd blue-gd">SASS</span>.
          </h1>
          <a href="https://www.cashmen.in/" class="md-button blue-gd" target="_blank">
            <i class="fas fa-external-link-square-alt mr-2"></i>Visit Website
          </a>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="project-inner-container" :class="(darkTheme) ? 'dark-bg' : 'light-bg'">
            <img class="project-inner-container--img" src="../../assets/images/pulse.png" alt />
            <div class="project-inner-container-right">
              <span class="project-inner-container--sub">
                <h4 class="project-inner-container--heading">Website Name :</h4>Pulse
                <br />
                <h4 class="project-inner-container--heading">URL :</h4>http://pulse.myorderbox.com
                <br />
                <h4 class="project-inner-container--heading">Tech Used :</h4>
                <i class="fab fa-html5 red mr-2"></i>
                <i class="fab fa-css3-alt blue mr-2"></i>
                <i class="fab fa-sass pink mr-2"></i>
                <br />
                <h4 class="project-inner-container--heading">Small Description :</h4>Website to display status and Announcements for Orderbox Platform
              </span>
            </div>
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Project Overview</h3>
            <p>
              Complete Front End Design Using CSS Preprocessor SASS. This project also included designing
              inline emails.
            </p>
          </div>
          <div class="image-grid-2">
            <img src="../../assets/images/pulse-1.png" alt />
            <img src="../../assets/images/pulse-2.png" alt />
            <img src="../../assets/images/pulse-3.png" alt />
            <img src="../../assets/images/pulse-4.png" alt />
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pulse",
  components: {},
  created(){
    window.scrollTo(0, 0);
  },
  data() {
    return {
      showDrawer: true
    };
  },
  props: ["darkTheme"],
  methods: {
    switchDrawer() {
      this.$emit("switchDrawer");
      this.showDrawer = !this.showDrawer;
    }
  }
};
</script>
<style lang="scss">
.underline-gd {
  background-size: 110% 0.5em;
  background-repeat: no-repeat;
  background-position: left 0 bottom -40%;
}

.image-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 2rem;
  img {
    border-radius: 8px;
    width: 100%;
  }
}
/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
}
</style>