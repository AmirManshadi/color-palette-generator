import { useContext } from "react"
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
} from "@chakra-ui/react"
import { Context } from "../context/AppContext"

export default function SideDrawer() {
	const { isDrawerOpen, onDrawerClose } = useContext(Context)
	return (
		<Drawer
			isOpen={isDrawerOpen as boolean}
			placement="right"
			onClose={onDrawerClose as () => void}
			size="sm"
		>
			<DrawerOverlay />
			<DrawerContent bg="#11213e" color="white">
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<Input placeholder="Type here..." />
				</DrawerBody>

				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onDrawerClose}>
						Cancel
					</Button>
					<Button colorScheme="blue">Save</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
