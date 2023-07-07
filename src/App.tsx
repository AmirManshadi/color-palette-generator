import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import AppContext from "./context/AppContext"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
	},
])

function App() {
	return (
		<AppContext>
			<RouterProvider router={router} />
		</AppContext>
	)
}

export default App
