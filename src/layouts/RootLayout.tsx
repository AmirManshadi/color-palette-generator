import { Outlet } from "react-router-dom"
import { Box, Container } from "@chakra-ui/react"
import Header from "../components/Header"
import SideDrawer from "../components/Drawer"

export default function RootLayout() {
	return (
		<Box
			w="100%"
			h="100%"
		>
			<Header />
			<SideDrawer />
			<Container
				as="main"
				maxWidth={[
					"container.sm",
					"container.md",
					"container.lg",
					"container.xl",
					"1400px",
				]}
			>
			</Container>
		</Box>
	)
}
