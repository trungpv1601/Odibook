import React, { Component } from 'react';
import { Panel, View, Page, ListItem, List, Icon, Block } from 'framework7-react';
import PanelLeftBG from '../assets/svg/background/7.svg';
import { BellIcon, BookmarkIcon, HomeIcon, ProfileIcon, Search2Icon, SettingsIcon } from './Icons';

class PanelLeft extends Component {
	render() {
		return (
			<Panel left reveal visibleBreakpoint={960}>
				<View>
					<Page
						style={{
							background: `url(${PanelLeftBG})`,
							backgroundRepeat: 'no-repeat',
							backgroundPositionX: 'right',
							// backgroundPositionY: '20%',
							backgroundColor: 'var(--f7-theme-color)',
							backgroundSize: 'cover'
						}}
					>
						<Block
							className="no-margin"
							style={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between'
							}}
						>
							<List noChevron noHairlines>
								<ListItem title="Home">
									<HomeIcon slot="media" />
								</ListItem>
								<ListItem title="Explore">
									<Search2Icon slot="media" />
								</ListItem>
								<ListItem title="Activity">
									<BellIcon slot="media" />
								</ListItem>
								<ListItem link="/library/" view=".view-main" panelClose title="Library">
									<BookmarkIcon slot="media" />
								</ListItem>
								<ListItem title="Profile">
									<ProfileIcon slot="media" />
								</ListItem>
							</List>
							<List noChevron noHairlines>
								<ListItem link="/settings/" view=".view-main" panelClose title="Settings">
									<SettingsIcon slot="media" />
								</ListItem>
							</List>
						</Block>
					</Page>
				</View>
			</Panel>
		);
	}
}

export default PanelLeft;
