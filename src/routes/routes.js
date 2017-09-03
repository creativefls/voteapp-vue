import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import DashboardMembers from 'src/components/Dashboard/Views/DashboardMembers.vue'
import VoteCommunities from 'src/components/Dashboard/Views/VoteCommunities.vue'
import SelectWorkshops from 'src/components/Dashboard/Views/SelectWorkshops.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'

const routes = [
  {
    path: '/',
    redirect: '/members'
  },
  {
    path: '/members',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'overview',
        component: DashboardMembers
      },
      {
        path: 'workshops/select',
        name: 'Pilih Kelas Workshop',
        component: SelectWorkshops
      },
      {
        path: 'communities/vote',
        name: 'Vote Komunitas',
        component: VoteCommunities
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
