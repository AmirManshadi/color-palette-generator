import { Button, HStack, Heading, Image, Text } from "@chakra-ui/react"
import logo from "../assets/rgb.png"

export default function Header() {
	return (
		<Heading
			as="h1"
			color="#ffffff"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			fontFamily="'DM Serif Display', serif"
			p="4"
		>
			<Image w="12" aspectRatio="1/1" src={logo}></Image>
			<HStack textAlign="center" spacing="2">
				<Text as="span" color="blue.400">
					Color
				</Text>
				<Text as="span" color="orange">
					Palette
				</Text>
				<Text as="span" color="pink.400">
					Generator
				</Text>
			</HStack>
			<Button
				variant="outline"
				borderColor="#38ad65"
				_hover={{ bg: "#38ad6545" }}
				colorScheme="purple"
				w="12"
				borderRadius="100%"
				h="12"
			></Button>
		</Heading>
	)
}
