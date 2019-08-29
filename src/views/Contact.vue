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
        <div class="social-media-container">
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fab fa-github-alt"></i>
          </a>
          <a href="#">
            <i class="fab fa-codepen"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="divider my-5" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
        <h1>Get in touch</h1>
        <form action="POST" data-netlify="true">
          <div class="form-group" :class="(darkTheme) ? 'form-group-dark' : ''">
            <label for="name">Your Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="What do people call you?"
            />
          </div>
          <div class="form-group" :class="(darkTheme) ? 'form-group-dark' : ''">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >I'll never share your email with anyone else.</small>
          </div>
          <div class="form-group" :class="(darkTheme) ? 'form-group-dark' : ''">
            <label for="exampleFormControlTextarea1">Your Message</label>
            <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="md-button">Submit</button>
        </form>
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
  width: 30%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;

  a {
    font-size: 1.6rem;

    &:hover {
      color: #3b7eeb;
    }
  }
}

.form-group-dark {
  input {
    background-color: #141414 !important;
    border-color: #242424 !important;
  }
  textarea {
    background-color: #141414 !important;
    border-color: #242424 !important;
  }
}
</style>