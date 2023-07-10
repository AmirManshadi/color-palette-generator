import { Box, Container } from "@chakra-ui/react"
import Header from "../components/Header"
import SideDrawer from "../components/Drawer"
import PaletteContainer from "../components/PaletteContainer"

export default function RootLayout() {
	return (
		<Box w="100%">
			<Header />
			<SideDrawer />
			<Container
				as="main"
				maxWidth={[
					"container.sm",
					"container.md",
					"container.lg",
					"container.xl",
					"1500px",
				]}
			>
				<PaletteContainer />
			</Container>
		</Box>
	)
}
