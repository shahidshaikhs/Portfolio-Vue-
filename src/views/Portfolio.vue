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
      <!-- Content -->
      <div class="container">
        <h1 class="display-4">Potfolio</h1>
        <p>Welcome to my online portfolio where I showcase projects that I have worked on in the past or the ones that I am presently working on. Feel free to reach out to me if you have any questions regarding any of these.</p>
        <div :class="(darkTheme) ? 'projects-container' : 'projects-container-light'">
          <router-link
            to
            :class="(darkTheme) ? 'projects-container__card' : 'projects-container-light__card'"
          >
            <div class="projects-container__card--left">
              <h1 class="projects-container__card--heading orange-gd">Scrittor - Note App</h1>
              <p
                class="projects-container__card--content"
              >Scrittor is a note taking app with a simple and easy to use interface. There are not extra unnecessary features to make everything super complex. You add notes, select a category and you are done. App primarily focuses on storing notes categorically and keeping interface as simple as possible.</p>
            </div>
            <div style="position:relative">
              <img
                :class="(darkTheme) ? 'projects-container__card--img' : 'projects-container-light__card--img'"
                src="../assets/images/scrittor_bg.png"
                alt
              />
            </div>
          </router-link>
          <router-link
            to
            :class="(darkTheme) ? 'projects-container__card' : 'projects-container-light__card'"
          >
            <div class="projects-container__card--left">
              <h1 class="projects-container__card--heading green-gd">Cashmen Website & API</h1>
              <p
                class="projects-container__card--content"
              >Cashmen is a modern mobile selling service to sell used smartphones within seconds. Cashmen provides the very best price for your old gadget with the least amount of efforts.</p>
            </div>
            <div style="position:relative">
              <img
                :class="(darkTheme) ? 'projects-container__card--img' : 'projects-container-light__card--img'"
                src="../assets/images/cashmen.png"
                alt
              />
            </div>
          </router-link>
          <router-link
            to
            :class="(darkTheme) ? 'projects-container__card' : 'projects-container-light__card'"
          >
            <div class="projects-container__card--left">
              <h1 class="projects-container__card--heading blue2-gd">Pulse Website & Emails</h1>
              <p
                class="projects-container__card--content"
              >Redesigned the Emails and Website for a company where users can know the status of the platform including Maintenance & Announcements. Both the website and the emails are mobile responsive and were made using CSS preprocessor named SASS</p>
            </div>
            <div style="position:relative">
              <img
                :class="(darkTheme) ? 'projects-container__card--img' : 'projects-container-light__card--img'"
                src="../assets/images/pulse.png"
                alt
              />
            </div>
          </router-link>
          <router-link
            to
            :class="(darkTheme) ? 'projects-container__card' : 'projects-container-light__card'"
          >
            <div class="projects-container__card--left">
              <h1 class="projects-container__card--heading buired-gd">Pineapple Icon Pack</h1>
              <p
                class="projects-container__card--content"
              >Following Google's Material Guidelines to the best of it's abilities. Consistency of each icon is very important when it comes to this icon pack, however they are still made in a creative way to make them stand out. </p>
            </div>
            <div style="position:relative">
              <img
                :class="(darkTheme) ? 'projects-container__card--img' : 'projects-container-light__card--img'"
                src="../assets/images/pineapple.png"
                alt
              />
            </div>
          </router-link>
           <router-link
            to
            :class="(darkTheme) ? 'projects-container__card' : 'projects-container-light__card'"
          >
            <div class="projects-container__card--left">
              <h1 class="projects-container__card--heading blue-gd">LogicBoxes Helpdesk</h1>
              <p
                class="projects-container__card--content"
              >Re-designed the entire helpdesk section of the website for ease of use and practicality. This also helped users to find information related to their query on the website itself which saved time. The redesigning goal was to make website helpful and easy to use for the customers yet keeping everything refreshing for the eyes.</p>
            </div>
            <div style="position:relative">
              <img
                :class="(darkTheme) ? 'projects-container__card--img' : 'projects-container-light__card--img'"
                src="../assets/images/logicboxes_bg.png"
                alt
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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
.projects-container {
  &__card {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
    background-image: linear-gradient(
      to right bottom,
      #1a1a1a,
      rgb(23, 23, 27)
    );
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.849);

    &--left {
      padding: 1.8rem;
    }

    &--img {
      clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      box-shadow: 0px 1px 20px rgb(0, 0, 0);
    }

    &--heading {
      letter-spacing: 2px;
      font-size: 2.6rem;
      font-weight: 700;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
    }

    &--content {
      font-size: 1rem;
      margin-bottom: 0;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
}

.projects-container-light {
  &__card {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
    border-radius: 8px;
    border: 2px solid rgb(190, 190, 190);
    color: #333;

    &--left {
      padding: 1.8rem;
    }

    &--img {
      clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &--heading {
      letter-spacing: 2px;
      font-size: 2.6rem;
      font-weight: 700;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
    }

    &--content {
      font-size: 1rem;
      margin-bottom: 0;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
}

.orange-gd {
  background-image: linear-gradient(to right, #fdca2f, #ff6f00);
}

.blue-gd {
  background-image: linear-gradient(to right, #43a1ff, #4624d6);
}

.blue2-gd {
  background-image: linear-gradient(to right, #03a9f4, #1cbb93);
}

.green-gd {
  background-image: linear-gradient(to right, #cddc39, #009688);
}

.buired-gd {
  background-image: linear-gradient(to right, #ff3259, #3d2ff4);
}
</style>
