import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Error from './components/Error'
import App from './components/App'
import Portfolio from './components/Portfolio'

const router = createBrowserRouter([
    {path: '/', element: <App />, children: [
        {index: true, element: <Navigate to='/main' />},
        {path: '/main', element: <Portfolio />},
        {path: '*', element: <Error />}
    ]}
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
