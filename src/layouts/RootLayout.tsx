import { Outlet } from "react-router-dom"
import { Box, Container } from "@chakra-ui/react"
import Header from "../components/Header"

export default function RootLayout() {
	return (
		<Box
			bgGradient="radial(circle farthest-corner at 100px 100px, #11213e 10%, #234580 90%)"
			w="100%"
			h="100dvh"
		>
			<Header />
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
				<Outlet />
			</Container>
		</Box>
	)
}
