import { Box, Flex, Grid } from "@chakra-ui/react"

export default function PaletteContainer() {
	const colors = ["#fff", "#f0f", "#f00", "#0ff", "#00f"]

	const customStyle = {
		justify: "flex-start",
		align: "center",
		p: "5",
		gap: "5",
		bg: "blackAlpha.500",
		my: "10",
		borderRadius: "md",
		transition: "background-color 300ms",
	}

	return (
		<Flex sx={customStyle} _hover={{ background: "blue" }}>
			{colors.map(color => (
				<Box
					key={color}
					borderRadius="md"
					h={"100%"}
					bg={color}
					flexBasis="20%"
					height="300px"
				/>
			))}
		</Flex>
	)
}
