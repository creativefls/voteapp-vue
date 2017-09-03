import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: 'Kelas Workshop',
      icon: 'ti-user',
      path: '/admin/notifications'
    },
    {
      name: 'Voting Komunitas',
      icon: 'ti-thumb-up',
      path: '/admin/stats'
    },
    {
      name: 'Informasi',
      icon: 'ti-announcement',
      path: '/admin/table-list'
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
