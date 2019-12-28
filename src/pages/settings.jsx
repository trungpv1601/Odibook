import React from 'react';
import {
	Page,
	Link,
	NavTitle,
	ListItem,
	List,
	Navbar,
	NavLeft,
	Block,
	Toggle
} from 'framework7-react';
import {
	BackIcon,
	ProfileIconWhite,
	RightArrowIcon,
	LockIcon,
	BellIconBlack,
	LocationIconBlack,
	BarChartIconBlack,
	LockoutIcon
} from '../components/Icons';
import PageBG from '../assets/svg/background/12.svg';

export default () => (
	<Page
		name="settings"
		style={{
			height: '100%',
			background: `url(${PageBG})`,
			backgroundRepeat: 'no-repeat',
			backgroundPositionX: 'right',
			backgroundPositionY: '10%',
			backgroundColor: 'var(--f7-theme-color)',
			backgroundSize: 'cover'
		}}
	>
		<Navbar className="nav-bg-custom">
			<NavLeft>
				<Link back>
					<BackIcon />
				</Link>
			</NavLeft>
			<NavTitle>Settings</NavTitle>
		</Navbar>
		{/* Page content */}
		<Block
			className="no-margin no-padding"
			style={{
				display: 'flex',
				backgroundColor: '#fff',
				height: '100%',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
			<List noHairlines noChevron>
				<ListItem title="Account Settings" link="#">
					<ProfileIconWhite slot="media" />
					<RightArrowIcon slot="after" />
				</ListItem>
				<ListItem title="Password" link="#">
					<LockIcon slot="media" />
					<RightArrowIcon slot="after" />
				</ListItem>
				<ListItem title="Notifications" link="#">
					<BellIconBlack slot="media" />
					<Toggle defaultChecked />
				</ListItem>
				<ListItem title="Location Access" link="#">
					<LocationIconBlack slot="media" />
					<Toggle defaultChecked />
				</ListItem>
				<ListItem title="Analytics" link="#">
					<BarChartIconBlack slot="media" />
					<RightArrowIcon slot="after" />
				</ListItem>
			</List>
			<List noHairlines noChevron>
				<ListItem title="Logout" className="logout">
					<LockoutIcon slot="media" color="#FF3F5E" />
					<RightArrowIcon slot="after" color="#FF3F5E" />
				</ListItem>
			</List>
		</Block>
	</Page>
);
