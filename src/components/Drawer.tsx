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

interface SideDrawerPropsType {
	isOpen: boolean
	onClose: () => void
}

export default function SideDrawer({ isOpen, onClose }: SideDrawerPropsType) {
	return (
		<Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
			<DrawerOverlay />
			<DrawerContent bg="#11213e" color="white">
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<Input placeholder="Type here..." />
				</DrawerBody>

				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button colorScheme="blue">Save</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
