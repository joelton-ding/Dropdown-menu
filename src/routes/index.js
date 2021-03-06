import IndexPage from '../page/Home/IndexPage'
import AboutUsPage from '../page/About/AboutUsPage'
import NotFoundPage from '../page/NotFoundPage'
import OldBrowserPage from '../page/OldBrowserPage'

var indexRoutes = [
  { path: '/about-us', name: 'about-us', component: AboutUsPage },
  { path: '/', name: 'Home', component: IndexPage },
  { path: '/404', name: '404', component: NotFoundPage },
  { path: '/browser-detect', name: 'browser-detect', component: OldBrowserPage }
]

export default indexRoutes
