import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import MembersDashboard from 'src/components/Dashboard/Views/MembersDashboard.vue'
import CommunitiesVote from 'src/components/Dashboard/Views/CommunitiesVote.vue'
import WorkshopsSelect from 'src/components/Dashboard/Views/WorkshopsSelect.vue'
import WorkshopsInfo from 'src/components/Dashboard/Views/WorkshopsInfo.vue'
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
        component: MembersDashboard
      },
      {
        path: 'workshops/select',
        name: 'Pilih Kelas Workshop',
        component: WorkshopsSelect
      },
      {
        path: 'communities/vote',
        name: 'Vote Komunitas',
        component: CommunitiesVote
      },
      {
        path: 'workshops/info',
        name: 'Kelas Workshop',
        component: WorkshopsInfo
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
