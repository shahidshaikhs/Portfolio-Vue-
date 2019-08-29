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
      <div class="container">
        <h1 class="display-4">Resume</h1>
        <button class="md-button">
          <i class="fas fa-file-pdf mr-2"></i>Download PDF Version
        </button>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        <img v-if="darkTheme" class="resume_img" src="../assets/images/resume_1.png" alt="">
        <div class="spacing-med"></div>
        <img v-if="darkTheme" class="resume_img" src="../assets/images/resume_2.png" alt="">
        <img v-if="!darkTheme" class="resume_img" src="../assets/images/resume_1_white.png" alt="">
        <div class="spacing-med"></div>
        <img v-if="!darkTheme" class="resume_img" src="../assets/images/resume_2_white.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "resume",
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
$blue-color: #3b7eeb;
.md-button {
  border-radius: 2px;
  margin-top: 0.5rem;
  padding: 8px 16px;
  background-color: $blue-color;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 2px #3b7feb33;
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 2px #3b7feb33;
  }
}

.resume_img{
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
.spacing-med{
    height: 2rem;;
}
</style>