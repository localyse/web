import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Results } from './pages/Results'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
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
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
  </React.StrictMode>
)
