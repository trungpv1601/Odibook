import React from 'react';
import {
	Page,
	Link,
	Block,
	Swiper,
	SwiperSlide,
	ListItem,
	List,
	Navbar,
	NavLeft,
	NavRight,
	BlockTitle,
	Searchbar,
	Row,
	Col
} from 'framework7-react';
import { BackIcon, ProfileIconWhite } from '../components/Icons';
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
		</Navbar>
		{/* Page content */}
		<p className="text-align-center" style={{ fontSize: '32px', color: '#fff', fontWeight: 800 }}>
			Settings
		</p>
		<div
			style={{
				backgroundColor: '#fff',
				paddingLeft: 'calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-left))',
				paddingRight: 'calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-right))',
				borderRadius: '20px 20px 0 0',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
			<List noHairlines>
				<ListItem title="Account Settings" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
				<ListItem title="Password" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
				<ListItem title="Notifications" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
				<ListItem title="Location Access" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
				<ListItem title="Analytics" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
			</List>
			<List noHairlines style={{ color: '#FF3F5E' }}>
				<ListItem title="Logout" link="#">
					<ProfileIconWhite slot="media" />
				</ListItem>
			</List>
		</div>
	</Page>
);
