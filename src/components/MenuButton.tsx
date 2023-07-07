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
			justify="center"
			align="center"
			gap="1.5"
			cursor="pointer"
			onClick={onClick}
			transition="gap 200ms"
			_hover={{
				gap: "2",
			}}
		>
			<Box w="8" h="1" borderRadius="2" bg={colors.logo.blue}></Box>
			<Box w="8" h="1" borderRadius="2" bg={colors.logo.orange}></Box>
			<Box w="8" h="1" borderRadius="2" bg={colors.logo.pink}></Box>
		</Flex>
	)
}
