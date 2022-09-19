import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Results } from './pages/Results'
import './global/index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
	{
    path: "/:lockey/results",
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)