import { Box, Grid } from "@chakra-ui/react"

export default function PaletteContainer() {
	const colors = ["#fff", "#f0f", "#f00", "#0ff", "#00f", "#ff0"]

	return (
		<Grid
			templateColumns={"1fr 1fr"}
			templateRows={"repeat(3, 1fr)"}
			h="100%"
			gap="3"
			p="4"
		>
			{colors.map(color => (
				<Box key={color} borderRadius="md" h={"100%"} bg={color} />
			))}
		</Grid>
	)
}
