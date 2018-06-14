import Loadable from 'react-loadable'
import { PageLoader } from '../Components'
import LandingPage from '../Routes/LandingPage'

const AsyncNextPage = Loadable({
  loader: () => import('../Routes/NextPage'),
  loading: PageLoader
});

const routes = [
  {
    title: 'LandingPage',
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    title: 'NextPage',
    path: '/next-page',
    component: AsyncNextPage,
    exact: true
  }
]

export default routes
