import React from 'react';
import { Page, Link, Block, BlockTitle, List, ListItem, Row, Col, Button } from 'framework7-react';
import { MenuIcon, SearchIcon } from '../components/Icons';
import HomeBG from '../assets/svg/home-bg.svg';

export default () => (
	<Page
		name="home"
		noNavbar
		style={{
			height: '100%',
			background: `url(${HomeBG})`,
			backgroundRepeat: 'no-repeat',
			backgroundPositionX: 'right',
			backgroundPositionY: '10%',
			backgroundColor: '#E9EEF4'
		}}
	>
		{/* Page content */}
		<Block
			className="no-padding"
			style={{
				height: '25%'
			}}
		>
			<Block className="no-margin" style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link popupClose>
					<MenuIcon />
				</Link>
				<Link>
					<SearchIcon />
				</Link>
			</Block>
			<Block
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}
			>
				<p
					className="no-margin-bottom"
					style={{
						fontSize: '24px',
						color: '#344252',
						fontWeight: '500'
					}}
				>
					Your Daily
				</p>
				<p
					className="no-margin-top"
					style={{
						fontSize: '24px',
						color: '#344252',
						fontWeight: '800'
					}}
				>
					Recommendation
				</p>
			</Block>
		</Block>
	</Page>
);
