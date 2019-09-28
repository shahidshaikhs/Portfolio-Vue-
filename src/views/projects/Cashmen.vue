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
          <h1 class="display-4 green-gd text-gd">Cashmen Website and API</h1>
          <h1 class="project-container-heading-2">
            Cashmen is a modern gadget selling service to sell used smartphones within seconds. My role was to design and develop the entire website and also create a backend REST APIservice using
            <span
              class="underline-gd green-gd"
            >Node JS</span> and
            <span class="underline-gd green-gd">MongoDB.</span>
          </h1>
          <a href="https://www.cashmen.in/" class="md-button green-gd" target="_blank">
            <i class="fas fa-external-link-square-alt mr-2"></i>Visit Website
          </a>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="project-inner-container" :class="(darkTheme) ? 'dark-bg' : 'light-bg'">
            <img class="project-inner-container--img" src="../../assets/images/cashmen.png" alt />
            <div class="project-inner-container-right">
              <span class="project-inner-container--sub">
                <h4 class="project-inner-container--heading">Website Name :</h4>Cashmen
                <br />
                <h4 class="project-inner-container--heading">URL :</h4>https://www.cashmen.in/
                <br />
                <h4 class="project-inner-container--heading">Tech Used :</h4>
                <i class="fab fa-vuejs green mr-2"></i>
                <i class="fab fa-sass pink mr-2"></i>
                <i class="fab fa-digital-ocean blue mr-2"></i>
                <i class="fab fa-node-js green-node"></i>
                <br />
                <h4 class="project-inner-container--heading">Small Description :</h4>Cashmen provides service to sell used gadgets using the Android App and Website
              </span>
            </div>
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Project Overview</h3>
            <p>
              The entire website was built from scratch using VueJS and Bulma CSS Framework. I have also made use of CSS processor named SASS. The website also has a backend which was developed by me using NodeJS and MongoDB. The API is hosted on a VPS purchased from Digital Ocean and the front end is hosted on a Cloud Hosting Package.
            </p>
          </div>
          <div class="image-grid-2">
            <img src="../../assets/images/cashmen-1.png" alt />
            <img src="../../assets/images/cashmen-2.png" alt />
            <img src="../../assets/images/cashmen-3.png" alt />
            <img src="../../assets/images/cashmen-4.png" alt />
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <h3 class="display-5 left-content">Client Feedback</h3>
          <div
            class="left-content my-4"
            :class="(darkTheme) ? 'testimonials-container' : 'testimonials-container-light'"
          >
            <a
              :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
              href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOHkRenqJ2NYRfawXC3c6rTxIS691xARwxLPvSPRMHg7jHc_mL4EBI5toSO-6GhNrVueVnJKl9jImAvw0EI"
              target="_blank"
            >
              <img
                class="testimonials-container__card--img"
                src="../../assets/images/junaid.jpg"
                alt
              />
              <h1 class="testimonials-container__card--heading">
                Junaid Gandhi
                <br />
                <span class="testimonials-container__card--heading-sub">Chief Technology Officer (CTO)</span>
              </h1>
              <p
                class="testimonials-container__card--content"
              >&nbsp;&nbsp;&nbsp;&nbsp;We just completed our new website Cashmen.in with Shahid Shaikh and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works with mobile devices.</p>
            </a>
            <a
              :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
              href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOF06An7Etlc-LCohrIMOsqH5LK1A345uKiJsV1TehJZsj4U3bjcXORDYYBf6LlYacFsHQni5OyVnGbZWtg"
              target="_blank"
            >
              <img
                class="testimonials-container__card--img"
                src="../../assets/images/mdd.jpg"
                alt
              />
              <h1 class="testimonials-container__card--heading">
                Muddassir Darbar
                <br />
                <span class="testimonials-container__card--heading-sub">Chief Technology Officer (CTO)</span>
              </h1>
              <p
                class="testimonials-container__card--content"
              >&nbsp;&nbsp;&nbsp;&nbsp;We tried it on an iPhone and a Droid and it was great on both! We love how easy it is to make changes ourselves, (after some training from Shahid) even though we know we have the support when/if we need it from him.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cashmen",
  created(){
    window.scrollTo(0, 0);
  },
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