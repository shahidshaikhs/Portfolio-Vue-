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
          <h1 class="display-4 orange-gd text-gd">Scrittor - Note App</h1>
          <h1
            class="project-container-heading-2"
          >Scrittor helps with a simple and easy to use interface. There are not extra unnecessary features to make everything super complex. App primarily focuses on storing notes categorically and keeping interface as simple as possible. The app was made using <span class="underline-gd orange-gd">Android SDK</span></h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.shahid.nid"
            class="md-button orange-gd"
            target="_blank"
          >
            <i class="fab fa-google-play mr-2"></i>Google PlayStore
          </a>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>

          <div class="project-inner-container" :class="(darkTheme) ? 'dark-bg' : 'light-bg'">
            <img class="project-inner-container--img" src="../../assets/images/scrittor_bg.png" alt />
            <div class="project-inner-container-right">
              <span class="project-inner-container--sub">
                <h4 class="project-inner-container--heading">App Name :</h4>Scrittor - A simple note app
                <br />
                <h4 class="project-inner-container--heading">URL :</h4>https://play.google.com/store/apps/details?id=com.shahid.nid
                <br />
                <h4 class="project-inner-container--heading">Downloads :</h4>100,000+
                <br />
                <h4 class="project-inner-container--heading">Small Description :</h4>Scrittor helps with a simple and easy to use interface. There are not extra unnecessary features to make everything super complex.
              </span>
            </div>
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Project Overview</h3>
            <p>
              With Scrittor store all your ideas, thoughts and whatever your mind tells you.
              Scrittor helps with a simple and easy to use interface. There are not extra unnecessary features to make everything super complex. You add notes, select a category and you are done. App primarily focuses on storing notes categorically and keeping interface as simple as possible.
            </p>
          </div>
          <div class="image-grid">
            <img src="../../assets/images/scrittor-1.jpg" alt />
            <img src="../../assets/images/scrittor-2.jpg" alt />
            <img src="../../assets/images/scrittor-3.jpg" alt />
            <img src="../../assets/images/scrittor-4.jpg" alt />
          </div>
          <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
          <div class="left-content">
            <h3 class="display-5">Featured On</h3>
            <ul class="featured-list">
              <li>
                Beebom.com (12 Best Note Taking Apps for Android in 2019) :
                <a
                  href
                >https://beebom.com/note-taking-apps-android/</a>
              </li>
              <li>
                Sam Beckman (Youtube: Top Android Apps! (March 2018)) :
                <a
                  href
                >https://www.youtube.com/watch?v=kFIctB6hQs4</a>
              </li>
              <li>
                Zachary Anderson (Youtube: Best Android Apps - December 2017!) :
                <a
                  href
                >https://www.youtube.com/watch?v=ov9EI8KigfY</a>
              </li>
              <li>
                TechMe0ut (Youtube: Top 5 Android Apps - June 2018) :
                <a
                  href
                >https://www.youtube.com/watch?v=pAEEJQ-wutM</a>
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