import { Box, Flex } from "@chakra-ui/react"
import { colors } from "../assets/colors/mainColors"
import { useContext } from "react"
import { Context } from "../context/AppContext"

export default function MenuButton() {
	const { onDrawerOpen } = useContext(Context)
	return (
		<Flex
			width="10"
			h="10"
			flexDir="column"
			justify="center"
			align="center"
			gap="1.5"
			cursor="pointer"
			onClick={onDrawerOpen as () => void}
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
