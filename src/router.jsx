import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/View/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);


export default router;