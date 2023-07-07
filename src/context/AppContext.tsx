import { createContext } from "react"
import { useDisclosure } from "@chakra-ui/react"

interface contextProviderPropsType {
	isDrawerOpen?: boolean
	onDrawerOpen?: () => void
	onDrawerClose?: () => void
}

const contextArg: contextProviderPropsType = {}

export const Context = createContext(contextArg)

interface AppContextPropsType {
	children: JSX.Element
}

export default function AppContext({ children }: AppContextPropsType) {
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure()

	return (
		<Context.Provider value={{ isDrawerOpen, onDrawerOpen, onDrawerClose }}>
			{children}
		</Context.Provider>
	)
}
