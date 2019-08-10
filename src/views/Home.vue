<template>
  <div id="content" :class="(darkTheme) ? 'dark' : 'light'">
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
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <h1 class="font-weight-bold display-4">Shahid Shaikh</h1>
          <h4 class="text-designation">Front End Developer</h4>
          <br />
          <p>
            I'm a creative front‑end developer with 2+ years of professional experience, based in Mumbai.
            <br />
            <br />I develop compelling designs that spring to life using transition and animations that suit my clients, using the sophisticated technologies available today for fully interactive and responsive websites and apps.
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img
            class="image_2 mb-3 mb-lg-0 ml-lg-5 mr-md-0"
            src="../assets/images/profile-2.png"
            alt
          />
        </div>
      </div>
      <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: ["darkTheme"],
  methods: {
    switchDrawer() {
      this.$emit("switchDrawer");
    }
  }
};
</script>
<style lang="scss">
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  color: #fff;
}

.text-designation{
  background: #3b7eeb;
  display: inline-block;
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  color: #fff;
}

.image_2 {
  max-width: 500px;
  border-radius: 5px;
}

.btn-info {
  outline: none;
  border: none;
  box-shadow: none;
}

.btn-info-dark {
  color: #fff;
}

.btn-info-light {
  color: #333;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  .image_2 {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
