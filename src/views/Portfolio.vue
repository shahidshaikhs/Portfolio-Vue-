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
        <h1>This is a content div</h1>
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
</style>
