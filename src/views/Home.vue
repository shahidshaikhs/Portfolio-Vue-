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
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <h1 class="font-weight-bold display-4">Shahid Shaikh</h1>
            <h4 class="text-designation">Front End Developer</h4>
            <br />
            <p>
              I'm a creative front‑end developer with 2+ years of professional experience, based in Mumbai.
              <br />
              <br />I invest a lot of energy in trying to do significant work with good code and design. It’s always a pleasure for me to take the trip of testing new technologies and new workflows.
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
        <h1>What do I do?</h1>
        <p>HTML CSS and JavaScript are my mother tongues. However, programming is not my only field of focus, I’m interested in design, UX/UI, new technologies and much more.</p>
        <div :class="(darkTheme) ? 'skills-container' : 'skills-container-light'">
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-js-square skills-container__card--img yellow"></i>
            <h5 class="skills-container__card--heading">Javascript (ES6)</h5>
            <p
              class="skills-container__card--content"
            >I have been working with Vanilla Javascript for more than 2 years now and have recently completed advance course with respect to ES6 as well</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-vuejs skills-container__card--img green"></i>
            <h5 class="skills-container__card--heading">Vue JS</h5>
            <p
              class="skills-container__card--content"
            >I have experience in developing dashboards, websites in Vue JS from scratch. Infact this entire website is made using VueJS as well</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-node-js skills-container__card--img green-node mr-3"></i>
            <i class="fab fa-npm skills-container__card--img red"></i>
            <h5 class="skills-container__card--heading">Node JS</h5>
            <p
              class="skills-container__card--content"
            >Can create Rest APIs connected with a backend database or full fledged websites using a templating language such as EJS / PUG</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fas fa-database skills-container__card--img mr-3 green-node"></i>
            <h5 class="skills-container__card--heading">Mongo DB</h5>
            <p
              class="skills-container__card--content"
            >Experience in creating a MongoDB Database and performing CRUD operations on the same using NPM packages like Mongoose.</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-html5 skills-container__card--img red"></i>
            <h5 class="skills-container__card--heading">HTML 5</h5>
            <p
              class="skills-container__card--content"
            >Semantic HTML code is what I believe in. I have experience in writing HTML code since last four years now.</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-css3-alt skills-container__card--img blue"></i>
            <h5 class="skills-container__card--heading">CSS 3</h5>
            <p
              class="skills-container__card--content"
            >I know to code websites that are responsive on all sorts of devices such as Mobiles, Tablets or Desktops.</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-sass skills-container__card--img pink"></i>
            <h5 class="skills-container__card--heading">SASS (CSS Preprocessor)</h5>
            <p
              class="skills-container__card--content"
            >The CSS that you see on this website is written entirely in Syntactically Awesome Style Sheets (SASS)</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-adobe skills-container__card--img mr-3 blue"></i>
            <i class="fab fa-figma skills-container__card--img mr-3 green"></i>
            <i class="fab fa-sketch skills-container__card--img orange"></i>
            <h5 class="skills-container__card--heading">Design Tools</h5>
            <p
              class="skills-container__card--content"
            >I use Photoshop, XD, Illustrator, Figma or sketch while designing user interfaces for websites and mobile applications</p>
          </div>
          <div :class="(darkTheme) ? 'skills-container__card' : 'skills-container-light__card'">
            <i class="fab fa-android skills-container__card--img mr-3 green-node"></i>
            <h5 class="skills-container__card--heading">Android SDK</h5>
            <p
              class="skills-container__card--content"
            >I also have experience in designing and developing Android applications from scratch using Android Studio.</p>
          </div>
        </div>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        <h1>Testimonials</h1>
        <p>Below reviews are the ones which end users have left on Playstore or have communicated verbally</p>
        <div :class="(darkTheme) ? 'testimonials-container' : 'testimonials-container-light'">
          <a
            :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
            href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOHkRenqJ2NYRfawXC3c6rTxIS691xARwxLPvSPRMHg7jHc_mL4EBI5toSO-6GhNrVueVnJKl9jImAvw0EI"
            target="_blank"
          >
            <img
              class="testimonials-container__card--img"
              src="https://lh3.googleusercontent.com/a-/AAuE7mC9JAUOBRqwgfiLbnysNHmIq9_bDuPJNIwBJ_IyMA=w512"
              alt
            />
            <h1 class="testimonials-container__card--heading">
              Melissia Lenox
              <br />
              <span class="testimonials-container__card--heading-sub">Scrittor - A simple note app</span>
            </h1>
            <p
              class="testimonials-container__card--content"
            >&nbsp;&nbsp;&nbsp;&nbsp;Great app - intuitive features for those who just want a simple note-taking or writing app - I use it for jotting down things of interest, snippets, random ideas, and tidbits i come across online or in life that may be useful or ...</p>
          </a>
          <a
            :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
            href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOF06An7Etlc-LCohrIMOsqH5LK1A345uKiJsV1TehJZsj4U3bjcXORDYYBf6LlYacFsHQni5OyVnGbZWtg"
            target="_blank"
          >
            <img
              class="testimonials-container__card--img"
              src="https://lh3.googleusercontent.com/a-/AAuE7mD6a04iKLbu26Fp1ZQCQbBtly1qach1YFGEjPU0Ww=w512"
              alt
            />
            <h1 class="testimonials-container__card--heading">
              Angiela Conte
              <br />
              <span class="testimonials-container__card--heading-sub">Scrittor - A simple note app</span>
            </h1>
            <p
              class="testimonials-container__card--content"
            >&nbsp;&nbsp;&nbsp;&nbsp;Straight forward, uncomplicated. Does what it's supposed to do. I wish it had text formatting though. Like the option to make certain texts bold, italic, etc. But it's cool as is. Thanks for the nice app, my dude. Live long and prosper.</p>
          </a>
          <a
            :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
            href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOFmV0Xm-aQROKHBLxUFMF5AM6_UyYA1DfsLDPsPoB9T9gwnF_nUM6Bf6SM6c3zLTie9ZMZh4PKd7vnCMhw"
            target="_blank"
          >
            <img
              class="testimonials-container__card--img"
              src="https://lh3.googleusercontent.com/a-/AAuE7mCJ8GtNMNQSRp17ic-lOVDETa3dvxBv2uQp7bxN6VQ=w512"
              alt
            />
            <h1 class="testimonials-container__card--heading">
              Nida Siddiqui
              <br />
              <span class="testimonials-container__card--heading-sub">Scrittor - A simple note app</span>
            </h1>
            <p
              class="testimonials-container__card--content"
            >&nbsp;&nbsp;&nbsp;&nbsp;Was just searching for a suitable notepad sorta thing to write my contents. It's too cute and simple.Anyone can access your apps easily.Great job and Bless you Shahid!</p>
          </a>
          <a
            :class="(darkTheme) ? 'testimonials-container__card' : 'testimonials-container-light__card'"
            href="https://play.google.com/store/apps/details?id=com.shahid.nid&hl=en_IN&reviewId=gp%3AAOqpTOGNz9Hnr-qT-OO6jEyNnyhU1pIfavqUMfwQmzWYaDdUqzMLfp8Mqp99rXC7_LIbkSqCpuw0plKbzZiuPQM"
            target="_blank"
          >
            <img
              class="testimonials-container__card--img"
              src="https://lh3.googleusercontent.com/a-/AAuE7mA0YJvtcn7q8w3D1wxqQRiCLCppllhE0cSCjFL1As0=w512"
              alt
            />
            <h1 class="testimonials-container__card--heading">
              Francesco Soru
              <br />
              <span class="testimonials-container__card--heading-sub">Scrittor - A simple note app</span>
            </h1>
            <p
              class="testimonials-container__card--content"
            >&nbsp;&nbsp;&nbsp;&nbsp;Loved this app and was just waiting for Google backup. You just replied to my 6months old review to let me know it was implemented. Wow thank you so much I'll be using this app as my main note taking!</p>
          </a>
        </div>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        <h1>Statistics</h1>
        <p>I have been fortunate enough to work on a vast variety of fields with respect to Front End and Android Development.</p>
        <div :class="(darkTheme) ? 'statistics-container' : 'statistics-container-light'">
          <div
            :class="(darkTheme) ? 'statistics-container__card' : 'statistics-container-light__card'"
          >
            <i class="fas fa-boxes statistics-container__card--img bluish"></i>
            <h1 class="statistics-container__card--heading">22</h1>
            <p class="statistics-container__card--sub">Projects Completed</p>
          </div>
          <div
            :class="(darkTheme) ? 'statistics-container__card' : 'statistics-container-light__card'"
          >
            <i class="fas fa-arrow-circle-down statistics-container__card--img yellowish"></i>
            <h1 class="statistics-container__card--heading">450K</h1>
            <p class="statistics-container__card--sub">Total App Downloads</p>
          </div>
          <div
            :class="(darkTheme) ? 'statistics-container__card' : 'statistics-container-light__card'"
          >
            <i class="fab fa-youtube statistics-container__card--img reddish"></i>
            <h1 class="statistics-container__card--heading">35</h1>
            <p class="statistics-container__card--sub">Youtube App Reviews</p>
          </div>
          <div
            :class="(darkTheme) ? 'statistics-container__card' : 'statistics-container-light__card'"
          >
            <i class="fas fa-briefcase statistics-container__card--img greenish"></i>
            <h1 class="statistics-container__card--heading">3 Yrs.</h1>
            <p class="statistics-container__card--sub">Total Work Experience</p>
          </div>
        </div>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  color: #fff;
}

.content-inner {
  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
}

.padding-left {
  padding-left: 300px;
  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
}

.text-designation {
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

.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    background-image: linear-gradient(
      to right bottom,
      #1a1a1a,
      rgb(23, 23, 27)
    );
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.849);

    &--img {
      font-size: 2.2rem;
    }

    &--heading {
      font-weight: 700;
      font-size: 1rem;
      margin-top: 1rem;
    }

    &--content {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
}

.skills-container-light {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    border: 2px solid rgb(190, 190, 190);
    border-radius: 8px;
    color: #333;

    &--img {
      font-size: 2.2rem;
    }

    &--heading {
      font-weight: 700;
      font-size: 1rem;
      margin-top: 1rem;
    }

    &--content {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
}

.testimonials-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    background-image: linear-gradient(
      to right bottom,
      #1a1a1a,
      rgb(23, 23, 27)
    );
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.849);

    &--img {
      height: 4.5rem;
      border-radius: 100px;
      display: inline-block;
    }

    &--heading {
      margin-left: 1rem;
      display: inline-block;
      margin-top: 1rem;
      font-weight: 700;
      font-size: 1.2rem;
      transition: all 1s;

      &-sub {
        font-size: 0.8rem;
        opacity: 0.5;
      }
    }

    &--content {
      margin-top: 1rem;
      font-size: 1rem;
      margin-bottom: 0;
      transition: all 1s;
      -webkit-line-clamp: 4; /* number of lines to show */

      &::before {
        content: open-quote;
        color: #3b7eeb;
        font-size: 2rem;
        padding: 2px;
        position: absolute;
      }
      &::after {
        position: absolute;
        content: close-quote;
        color: #3b7eeb;
        font-size: 2rem;
        padding: 2px;
      }
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }
}

.testimonials-container-light {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    border: 2px solid rgb(190, 190, 190);
    border-radius: 8px;
    color: #333;

    &--img {
      height: 4.5rem;
      border-radius: 100px;
      display: inline-block;
    }

    &--heading {
      margin-left: 1rem;
      display: inline-block;
      margin-top: 1rem;
      font-weight: 700;
      font-size: 1.2rem;
      transition: all 1s;

      &-sub {
        font-size: 0.8rem;
        opacity: 0.5;
      }
    }

    &--content {
      margin-top: 1rem;
      font-size: 1rem;
      margin-bottom: 0;
      transition: all 1s;
      -webkit-line-clamp: 4; /* number of lines to show */

      &::before {
        content: open-quote;
        color: #3b7eeb;
        font-size: 2rem;
        padding: 2px;
        position: absolute;
      }
      &::after {
        position: absolute;
        content: close-quote;
        color: #3b7eeb;
        font-size: 2rem;
        padding: 2px;
      }
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }
}

.statistics-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    background-image: linear-gradient(
      to right bottom,
      #1a1a1a,
      rgb(23, 23, 27)
    );
    border-radius: 8px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.849);
    text-align: center;

    &--img {
      font-size: 1.4rem;
      padding: 0.8rem;
      border-radius: 100px;
    }

    &--heading {
      font-weight: 700;
      margin-top: 1rem;
      letter-spacing: 4px;
      font-size: 2rem;
      margin-bottom: 0;
    }

    &--sub {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
}

.statistics-container-light {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  &__card {
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    border: 2px solid rgb(190, 190, 190);
    color: #333;

    &--img {
      font-size: 1.4rem;
      padding: 0.8rem;
      border-radius: 100px;
    }

    &--heading {
      font-weight: 700;
      margin-top: 1rem;
      letter-spacing: 4px;
      font-size: 2rem;
      margin-bottom: 0;
    }

    &--sub {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
}

// Colors
.yellow {
  color: #ffdc18;
}

.green {
  color: #25ee9a;
}

.green-node {
  color: #8add3d;
}

.red {
  color: #ee2550;
}

.blue {
  color: #247afa;
}

.pink {
  color: #eb4c9b;
}

.orange {
  color: #f58e2f;
}

.bluish {
  background: #c2d8f8;
  color: #247afa;
}

.yellowish {
  background: #ffeab1;
  color: #faa424;
}

.reddish {
  background: #ffb5bf;
  color: #fa2441;
}

.greenish {
  background: #24fa96;
  color: #0f9b5a;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  .image_2 {
    margin: 0 auto;
    width: 100%;
  }

  .padding-left {
    padding-left: 0px;
  }

  .testimonials-container {
    grid-template-columns: 1fr;
  }
  .skills-container {
    grid-template-columns: 1fr;
  }
  .statistics-container {
    grid-template-columns: 1fr 1fr;
  }
  .testimonials-container-light {
    grid-template-columns: 1fr;
  }
  .skills-container-light {
    grid-template-columns: 1fr;
  }
  .statistics-container-light {
    grid-template-columns: 1fr 1fr;
    &--heading {
      font-size: 1.2rem;
    }
  }
  .statistics-container__card--heading{
    font-size: 1.5rem;
  }
  .statistics-container__card--sub{
    font-size: .8rem;
  }
}
</style>
