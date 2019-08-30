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
          <h1 class="display-4 buired-gd text-gd">Pineapple Icon Pack</h1>
          <h1
            class="project-container-heading-2"
          >Following <span class="underline-gd buired-gd">Google's Material Guidelines</span> to the best of it's abilities. Consistency of each icon is very important when it comes to this icon pack, however they are still made in a creative way to make them stand out.</h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.shahid.pineapple"
            class="md-button buired-gd"
            target="_blank"
          >
            <i class="fab fa-google-play mr-2"></i>Google PlayStore
          </a>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>

          <div class="project-inner-container" :class="(darkTheme) ? 'dark-bg' : 'light-bg'">
            <img class="project-inner-container--img" src="../../assets/images/pineapple.png" alt />
            <div class="project-inner-container-right">
              <span class="project-inner-container--sub">
                <h4 class="project-inner-container--heading">App Name :</h4>Pineapple - Icon Pack
                <br />
                <h4 class="project-inner-container--heading">URL :</h4>https://play.google.com/store/apps/details?id=com.shahid.pineapple
                <br />
                <h4 class="project-inner-container--heading">Downloads :</h4>200,000+
                <br />
                <h4 class="project-inner-container--heading">Small Description :</h4>Pineapple Icon Pack contains 1144 Material Designed Icons with support for multiple android launchers
              </span>
            </div>
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Project Overview</h3>
            <p>
              I had published this app on Google's Playstore in 2016. Since then it has received around 2 lakh plus downloads and has a respectable rating of 4.6 on Playstore. It uses an Open Source dashboard, however, all the icons are designed by me using Photoshop.
            </p>
          </div>
          <div class="image-grid-2">
            <img src="../../assets/images/pine-1.png" alt />
            <img src="../../assets/images/pine-2.png" alt />
            <img src="../../assets/images/pine-3.png" alt />
            <img src="../../assets/images/pine-4.png" alt />
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Featured On</h3>
            <ul class="featured-list">
              <li>
                XDA.com (Top 5 Icon Packs for March) :
                <a
                  href
                >https://www.xda-developers.com/top-5-icon-packs-for-march/</a>
              </li>
              <li>
                XDA Youtube (Top 5 Icon Packs for March) :
                <a
                  href
                >https://www.youtube.com/watch?v=SX1S-EHD6C8</a>
              </li>
              <li>Copper vs Glass (Top Android Icon Packs! (January 2019)) :
                <a
                  href
                >https://www.youtube.com/watch?v=i-N9WJ26CYo</a>
              </li>
              <li>ANDROID SPACE :
                <a
                  href
                >https://www.youtube.com/watch?v=3_I1AzXGygY</a>
              </li>
            </ul>
          </div>
        </div>
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
.center-content {
  text-align: center;
}

.left-content {
  text-align: left;
}

.text-gd {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-container {
  &-heading-2 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.6rem;
  }

  .project-inner-container {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-radius: 8px;

    &--img {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &--heading {
      font-weight: 500;
      opacity: 0.5;
      display: inline-block;
      font-size: 1rem;
      padding-right: 1rem;
    }
    &-right {
      position: relative;
    }
    &--sub {
      position: absolute;
      padding: 2rem;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  .image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    img {
      border-radius: 8px;
    }

    img:nth-of-type(1) {
      height: 500px;
    }
    img:nth-of-type(2) {
      height: 600px;
    }
    img:nth-of-type(3) {
      height: 600px;
    }
    img:nth-of-type(4) {
      margin-top: 4rem;
      height: 500px;
    }
  }
}

.featured-list {
  margin-top: 2rem;

  li {
    margin-top: 0.5rem;
    a {
      color: #4f92ff;
    }
  }
}

.dark-bg{
    background-color: #141414;
}

.light-bg{
    background-color: none;
    border: 1px solid grey;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  .project-container {
    .text-gd {
      font-size: 2rem;
    }
    &-heading-2 {
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-weight: 400;
      opacity: 0.8;
      letter-spacing: 2px;
      font-size: .8rem;
    }

    .project-inner-container {
      text-align: left;
      padding: 1rem;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 8px;

      &--img {
        display: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &--heading {
        font-weight: 500;
        opacity: 0.5;
        display: block;
        font-size: 0.8rem;
        padding-top: 1rem;
      }

      &-right {
        position: static;
      }
      &--sub {
        font-size: 0.8rem;
        width: 100%;
        position: static;
        top: 0;
        padding: 0;
        transform: translate(0, 0);
      }
    }

    .image-grid {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 2rem;
      img {
        border-radius: 8px;
        margin-top: 1rem;
      }

      img:nth-of-type(1) {
        height: 400px;
      }
      img:nth-of-type(2) {
        height: 400px;
      }
      img:nth-of-type(3) {
        height: 400px;
      }
      img:nth-of-type(4) {
        margin-top: 1rem;
        height: 400px;
      }
    }
  }
}
</style>