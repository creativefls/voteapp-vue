import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/members'
    },
    {
      name: 'Kelas Workshop',
      icon: 'ti-user',
      path: '/members/notifications'
    },
    {
      name: 'Voting Komunitas',
      icon: 'ti-thumb-up',
      path: '/members/stats'
    },
    {
      name: 'Informasi',
      icon: 'ti-announcement',
      path: '/members/table-list'
    },
    {
      name: 'Logout',
      icon: 'ti-lock',
      path: '/logout'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
