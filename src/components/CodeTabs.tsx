import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { colors } from "../assets/colors/mainColors"

export default function CodeTabs() {
	return (
		<Tabs isFitted variant="soft-rounded" colorScheme="whiteAlpha" p="4">
			<TabList>
				<Tab
					color={colors.logo.blue}
					sx={{ "&[aria-selected=true]": { color: colors.logo.blue } }}
				>
					CSS
				</Tab>
				<Tab
					color={colors.logo.orange}
					sx={{ "&[aria-selected=true]": { color: colors.logo.orange } }}
				>
					JSS
				</Tab>
				<Tab
					color={colors.logo.pink}
					sx={{ "&[aria-selected=true]": { color: colors.logo.pink } }}
				>
					SASS
				</Tab>
			</TabList>

			<TabPanels color="whiteAlpha.800">
				<TabPanel>
					<p>one!</p>
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
