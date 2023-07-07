import { HStack, Heading, Image, Text } from "@chakra-ui/react"
import logo from "../assets/rgb.png"
import MenuButton from "./MenuButton"

interface HeaderPropsType {
	onOpen: () => void
}

export default function Header({ onOpen }: HeaderPropsType) {
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
			<HStack display={["none", "flex"]} textAlign="center" spacing="2">
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
			<MenuButton onClick={onOpen}></MenuButton>
		</Heading>
	)
}
