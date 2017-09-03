<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img class="c-logo" src="/static/img/fls-logo-baru.png" alt="FLS Logo">
        </a>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
          <!-- <li class="open">
            <a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li> -->
             <drop-down title="Hai Coeg" icon="ti-face-smile">
               <li><a href="#">Setting</a></li>
               <li><a href="#">Logout</a></li>
             </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>
.c-logo{
  max-width: 60%;
  margin-top: -0.6em;
  margin-left: 0.5em;
}
</style>
