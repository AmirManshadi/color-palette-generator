import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { colors as mainColors } from "../assets/colors/mainColors"

export default function CodeSnippet({ technology }: { technology: string }) {
	const [colors, setColors] = useState([
		"white",
		"black",
		"blue",
		"red",
		"green",
		"yellow",
	])

	return (
		<Box id="code-snippet">
			{technology === "css" ? (
				<CSS colors={colors} />
			) : technology === "emotion" ? (
				<EMOTION colors={colors} />
			) : (
				<SASS colors={colors} />
			)}
		</Box>
	)
}

function CSS({ colors }: { colors: string[] }) {
	return (
		<>
			<Text color={mainColors.logo.blue}>{":root {"}</Text>
			<Text ps="4">
				{colors.map((color, i) => (
					<Text key={color}>
						<Text display="inline-block" color="red.400" mx="2">
							--color-0{i + 1}
						</Text>
						:
						<Text display="inline-block" mx="2">
							{color}
						</Text>
					</Text>
				))}
			</Text>
			<Text color={mainColors.logo.blue}>{"}"}</Text>
		</>
	)
}
function EMOTION({ colors }: { colors: string[] }) {
	return (
		<>
			<Text color={mainColors.logo.orange}>{"const theme = { "}</Text>
			<Text ps="4" color="blue.300">{"colors: {"}</Text>
			{colors.map((color, i) => (
				<Text key={color} ps="8">
					color_0{i + 1}: "{color}",
				</Text>
			))}
			<Text ps="4" color="blue.300">{"}"}</Text>
			<Text color={mainColors.logo.orange}>{"}"}</Text>
		</>
	)
}
function SASS({ colors }: { colors: string[] }) {
	return (
		<>
			<Text>
				{colors.map((color, i) => (
					<Text key={color}>
						<Text display="inline-block" color={mainColors.logo.pink} mx="2">
							$color-0{i + 1}
						</Text>
						:
						<Text display="inline-block" mx="2">
							{color}
						</Text>
						;
					</Text>
				))}
			</Text>
		</>
	)
}
