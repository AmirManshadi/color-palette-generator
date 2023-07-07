import { Box, Flex } from "@chakra-ui/react"
import { colors } from "../assets/colors/mainColors"

interface MenuButtonPropsType {
	onClick: () => void
}

export default function MenuButton({ onClick }: MenuButtonPropsType) {
	return (
		<Flex
			width="10"
			h="10"
			flexDir="column"
			justify="space-around"
			align="center"
			cursor="pointer"
			onClick={onClick}
		>
			<Box w="10" h="1" borderRadius="2" bg={colors.logo.blue}></Box>
			<Box w="10" h="1" borderRadius="2" bg={colors.logo.orange}></Box>
			<Box w="10" h="1" borderRadius="2" bg={colors.logo.pink}></Box>
		</Flex>
	)
}
