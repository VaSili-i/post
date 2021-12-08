import Post from './pages/Posts.jsx';
import Auth from './pages/Auth.jsx';

export const publicRouter = [
{path: '/', Element: Post},
{path: '/about', Element: Post},
{path: '/login', Element: Auth}
]