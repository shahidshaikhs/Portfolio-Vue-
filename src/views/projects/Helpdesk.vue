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
          <h1 class="display-4 blue-gd text-gd">LogicBoxes Helpdesk</h1>
          <h1 class="project-container-heading-2">
            Re-designed the entire helpdesk section of the website for ease of use and practicality. This also helped users to find information related to their query on the website itself which saved time. The redesigning goal was to make website <span class="underline-gd blue-gd">helpful and easy to use</span> for the customers yet keeping everything refreshing for the eyes.
          </h1>
          <a href="https://support.logicboxes.com/helpdesk/" class="md-button blue-gd" target="_blank">
            <i class="fas fa-external-link-square-alt mr-2"></i>Visit Website
          </a>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="project-inner-container" :class="(darkTheme) ? 'dark-bg' : 'light-bg'">
            <img class="project-inner-container--img" src="../../assets/images/logicboxes_bg.png" alt />
            <div class="project-inner-container-right">
              <span class="project-inner-container--sub">
                <h4 class="project-inner-container--heading">Website Name :</h4>LogicBoxes Helpdesk
                <br />
                <h4 class="project-inner-container--heading">URL :</h4>https://support.logicboxes.com/helpdesk/
                <br />
                <h4 class="project-inner-container--heading">Tech Used :</h4>
                <i class="fab fa-html5 red mr-2"></i>
                <i class="fab fa-css3-alt blue mr-2"></i>
                <i class="fab fa-js-square yellow mr-2"></i>
                <br />
                <h4 class="project-inner-container--heading">Small Description :</h4>Online helpdesk for LogicBoxes to assist customers with their queries.
              </span>
            </div>
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Project Overview</h3>
            <p>
              This helpdesk is provided by Kayako. I was responsible for chaning the look of the same using HTML CSS and Javascript.
            </p>
          </div>
          <div class="image-grid-2">
            <img src="../../assets/images/lb-1.png" alt />
            <img src="../../assets/images/lb-2.png" alt />
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