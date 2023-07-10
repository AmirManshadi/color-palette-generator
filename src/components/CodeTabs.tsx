import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { colors } from "../assets/colors/mainColors"
import CodeSnippet from "./CodeSnippet"

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
					EMOTION
				</Tab>
				<Tab
					color={colors.logo.pink}
					sx={{ "&[aria-selected=true]": { color: colors.logo.pink } }}
				>
					SASS
				</Tab>
			</TabList>

			<TabPanels color="whiteAlpha.800" fontFamily="'DM Sans', sans-serif" fontSize="lg">
				<TabPanel>
					<CodeSnippet technology="css" />
				</TabPanel>
				<TabPanel>
					<CodeSnippet technology="emotion" />
				</TabPanel>
				<TabPanel>
					<CodeSnippet technology="sass" />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
