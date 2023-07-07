import { HStack, Heading, Image, Text } from "@chakra-ui/react"
import logo from "../assets/rgb.png"
import MenuButton from "./MenuButton"
import { colors } from "../assets/colors/mainColors"

interface HeaderPropsType {
	onOpen: () => void
}

export default function Header({ onOpen }: HeaderPropsType) {
	return (
		<Heading
			as="h1"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			fontFamily="'DM Serif Display', serif"
			p="4"
		>
			<Image w="12" aspectRatio="1/1" src={logo}></Image>
			<HStack display={["none", "flex"]} textAlign="center" spacing="2">
				<Text as="span" color={colors.logo.blue}>
					Color
				</Text>
				<Text as="span" color={colors.logo.orange}>
					Palette
				</Text>
				<Text as="span" color={colors.logo.pink}>
					Generator
				</Text>
			</HStack>
			<MenuButton onClick={onOpen}></MenuButton>
		</Heading>
	)
}
