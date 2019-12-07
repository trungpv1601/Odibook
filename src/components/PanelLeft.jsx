import React, { Component } from 'react';
import { Panel, View, Page, Navbar, BlockTitle, List, ListItem } from 'framework7-react';

class PanelLeft extends Component {
	render() {
		return (
			<Panel left reveal visibleBreakpoint={960}>
				<View>
					<Page>
						<Navbar title="Left Panel" />
						<BlockTitle>Left View Navigation</BlockTitle>
						<List>
							<ListItem link="/left-page-1/" title="Left Page 1" />
							<ListItem link="/left-page-2/" title="Left Page 2" />
						</List>
						<BlockTitle>Control Main View</BlockTitle>
						<List>
							<ListItem link="/about/" view=".view-main" panel-close title="About" />
							<ListItem link="/form/" view=".view-main" panel-close title="Form" />
							<ListItem link="#" view=".view-main" back panel-close title="Back in history" />
						</List>
					</Page>
				</View>
			</Panel>
		);
	}
}

export default PanelLeft;
