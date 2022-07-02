import config from '~/configs'

// Pages
import Home from '~/pages/Home'
import Feedback from '~/pages/Feedback'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Upload from '~/pages/Upload'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.feekback, component: Feedback },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.search, component: Search, layout: null },
]

// Private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
