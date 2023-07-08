import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
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
				<Grid
					templateAreas={[
						`"palette" "boilerplate"`,
						null,
						null,
						`"boilerplate palette"`,
					]}
					gridTemplateRows={["90dvh 90dvh", null, null, "90dvh"]}
					gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
					rowGap="10"
					columnGap="5"
					h="100%"
					alignItems="normal"
				>
					<GridItem area={"palette"} bg={"blackAlpha.500"} borderRadius="md">
						<PaletteContainer />
					</GridItem>
					<GridItem
						area={"boilerplate"}
						bg={"blackAlpha.500"}
						borderRadius="md"
						mb={["5", null, null, "0"]}
					></GridItem>
				</Grid>
			</Container>
		</Box>
	)
}
