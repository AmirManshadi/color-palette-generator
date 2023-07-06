import { Outlet } from "react-router-dom"
import {
	Box,
	Button,
	Container,
	HStack,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react"
import logo from "../assets/rgb.png"

export default function RootLayout() {
	return (
		<Box
			bgGradient="radial(circle farthest-corner at 100px 100px, #11213e 10%, #234580 90%)"
			w="100%"
			h="100dvh"
		>
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
					<Text as="span" color="orange">
						Color
					</Text>
					<Text as="span" color="blue.400">
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
