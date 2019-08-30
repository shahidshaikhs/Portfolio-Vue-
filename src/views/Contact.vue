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
        <h1 class="display-4">Contact</h1>
        <p>
          Have a cool project in mind, and think I can help you with it? Feel free to e-mail me at
          <a
            href
            class="text-email"
          >shahid.sk27595@gmail.com</a> and I shall get back to you as early as possible 😀
        </p>
        <br />
        <p>Alternatively, you can reach out to me via below social media channels</p>
        <br />
        <div class="social-media-container">
          <a href="https://twitter.com/__shahidshaikh" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/shahid-shaikh-b9528497/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="http://github.com/shahidshaikhs" target="_blank">
            <i class="fab fa-github-alt"></i>
          </a>
          <a href="https://codepen.io/shahidshaikhs" target="_blank">
            <i class="fab fa-codepen"></i>
          </a>
          <a href="https://www.instagram.com/__shahidshaikh/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        <h1 class="display-5">About this Website</h1>
        <p>
          This website is made using Vue JS
          <i class="fab fa-vuejs green"></i> Framework and CSS preprocessor such as SASS
          <i class="fab fa-sass pink"></i>. The website is open source and can be found on Github
          <i class="fab fa-github-alt blue"></i>. Feel free to reach out to me if you have any suggestions with regards to the same or if you have any questions. I would be happy to help you out.
        </p>
        <a
          href="https://github.com/shahidshaikhs/Portfolio-Vue-/archive/master.zip"
          class="md-button"
        >
          <i class="fas fa-code mr-2"></i>Download Source Code
        </a>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
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
.text-email {
  color: #3b7eeb;
}
.social-media-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  width: 50%;

  a {
    font-size: 1.6rem;

    &:hover {
      color: #3b7eeb;
    }
  }
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  .social-media-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: 80%;

    a {
      font-size: 1.6rem;

      &:hover {
        color: #3b7eeb;
      }
    }
  }
}
</style>