<template>
  <!-- Sidebar  -->
  <nav :class="(showDrawer) ? 'active' : ''" id="sidebar">
    <div class="sidebar-container" :class="(darkTheme) ? 'dark-light' : 'light-faded'">
      <div class="sidebar-header">
        <h4>Shahid Shaikh</h4>
        <img class="profile_img" src="../assets/images/profile.jpg" alt />
        <p>I'm a front end developer who strives to design apps with joyful and timeless user experiences.</p>
        <ul class="social-list list-inline py-2 mx-auto social-icons">
          <li class="list-inline-item" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="list-inline-item" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <a href="#">
              <i class="fab fa-github-alt"></i>
            </a>
          </li>
          <li class="list-inline-item" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <a href="#">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div class="divider" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
      </div>

      <ul class="list-unstyled components">
        <li class="active" :class="(darkTheme) ? 'hover-dark active-dark' : 'hover-light'">
          <a href="#">
            <i class="fas fa-user-alt mr-2 fa-fw"></i>About Me
          </a>
        </li>
        <li class="mt-3">
          <a href="#" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <i class="fas fa-laptop-code mr-2 fa-fw"></i>Portfolio
          </a>
        </li>
        <li class="mt-3">
          <a href="#" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <i class="fas fa-file-alt mr-2 fa-fw"></i>Resume
          </a>
        </li>
        <li class="mt-3">
          <a href="#" :class="(darkTheme) ? 'hover-dark' : 'hover-light'">
            <i class="fas fa-address-book mr-2 fa-fw"></i>Contact
          </a>
        </li>
      </ul>
      <div class="divider mx-4" :class="(darkTheme) ? 'divider-dark' : 'divider-light'"></div>
      <ul class="list-unstyled CTAs">
        <li :class="(darkTheme) ? 'download-dark' : 'download-light '">
          <a
            href="https://bootstrapious.com/tutorial/files/sidebar.zip"
            class="download"
          >Download source</a>
        </li>
        <li>
          <h6 class="toggle-name">
            <i class="fas fa-adjust mr-1"></i>Dark Mode:&nbsp;&nbsp;
          </h6>
          <label class="toggle-control">
            <input type="checkbox" checked="checked" @change="changeTheme()" />
            <span class="control"></span>
          </label>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Sidebar",
  props: ["showDrawer", "darkTheme"],
  data() {
    return {};
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme");
    }
  }
};
</script>
<style lang="scss">
#sidebar {
  min-width: 300px;
  max-width: 300px;
  color: #fff !important;
  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
  transform-origin: bottom left;
}

.divider-dark{
    height: 1px;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.5);
}

.divider-light{
    height: 1px;
    border-bottom: 1px dashed rgba(51, 51, 51, 0.5);
}

#sidebar.active {
  margin-left: -300px;
}

#sidebar .sidebar-header {
  padding: 40px 20px 0px 20px;
  text-align: center;
}

#sidebar .profile_img {
  margin-top: 20px;
  width: 150px;
  border-radius: 100px;
}

#sidebar p {
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
}

#sidebar ul.components {
  padding: 20px;
  text-align: center;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

.list-unstyled .components li{
    margin-top: 2rem;
}

#sidebar ul li a {
  padding: 10px;
  display: block;
  font-size: 16px;
  font-weight: 700;
}

.social-icons li a {
  font-weight: 400 !important;
}

a[data-toggle="collapse"] {
  position: relative;
}

#sidebarCollapse {
  background: none !important;
}

#sidebarCollapse:hover {
  color: #3b7eeb;
}

.sidebar-container {
  height: 100%;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
  text-align: center;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

.toggle-name {
  font-size: 14px;
  padding-top: 20px;
}

.active {
  color: rgba(0,0,0,0.5) !important;
}

.active-dark {
  color: #3b7eeb !important;
}

.hover-dark {
  color: rgba(255, 255, 255, 0.8);
}

.hover-dark:hover {
  color: #3b7eeb !important;
}

.hover-light {
  color: rgba(255, 255, 255, 0.8);
}

.hover-light:hover {
  color: rgba(0,0,0,0.5) !important;
}

.download-dark {
  background: #1b1b1b;
  color: #5391f5;
}

.download-light {
  background: #5391f5;
  color: #FFF;
}



/* ---------------------------------------------------
    CHECKBOX STYLE
----------------------------------------------------- */
.toggle-control {
  position: relative;
  padding-left: 50px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.toggle-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: #3b7eeb;
}
.toggle-control input:checked ~ .control:after {
  left: 28px;
}
.toggle-control .control {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 50px;
  border-radius: 25px;
  background-color: darkgray;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 4px;
  width: 18px;
  height: 17px;
  border-radius: 25px;
  background: white;
  transition: left 0.15s ease-in;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -300px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}

</style>