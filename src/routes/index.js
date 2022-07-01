// Layouts
import { HeaderOnly } from '~/components/Layout'

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Upload from '~/pages/Upload'

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload },
    { path: '/search', component: Search, layout: null },
]

// Private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
