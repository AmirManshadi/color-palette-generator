import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import Header from "../components/Header"
import SideDrawer from "../components/Drawer"

export default function RootLayout() {
	return (
		<Box w="100%" h="100%">
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
				h="90dvh"
			>
				<Grid
					templateAreas={[
						`"palette" "boilerplate"`,
						null,
						null,
						`"palette boilerplate"`,
					]}
					gridTemplateRows={["100% 100%", null, null, "100%"]}
					gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
					gap="4"
					h="100%"
				>
					<GridItem
						area={"palette"}
						bg={"blackAlpha.300"}
						borderRadius="md"
					></GridItem>
					<GridItem
						area={"boilerplate"}
						bg={"blackAlpha.300"}
						borderRadius="md"
					></GridItem>
				</Grid>
			</Container>
		</Box>
	)
}
