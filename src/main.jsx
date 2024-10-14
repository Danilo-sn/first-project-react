import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'
import GlobalStyles from './styles/globalStyles.js'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "usuarios",
    element: <User />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </StrictMode>,
)
