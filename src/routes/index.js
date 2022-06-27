// Layouts
import { HeaderOnly } from '~/components/Layout'

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload },
]

// Private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
