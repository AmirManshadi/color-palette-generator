import { Box, Flex } from "@chakra-ui/react"

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
			<Box w="10" h="1" borderRadius="2" bg="#26A6FE"></Box>
			<Box w="10" h="1" borderRadius="2" bg="#FE5694"></Box>
			<Box w="10" h="1" borderRadius="2" bg="#FEA613"></Box>
		</Flex>
	)
}
