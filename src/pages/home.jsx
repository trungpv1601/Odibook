import React from 'react';
import {
	Page,
	Navbar,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	NavRight,
	Link,
	Toolbar,
	Block,
	BlockTitle,
	List,
	ListItem,
	Row,
	Col,
	Button
} from 'framework7-react';

export default () => (
	<Page name="home">
		{/* Top Navbar */}
		<Navbar sliding={false}>
			<NavLeft>
				<Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
			</NavLeft>
			<NavTitle sliding>Odibook</NavTitle>
		</Navbar>
		{/* Toolbar */}
		<Toolbar bottom>
			<Link>Left Link</Link>
			<Link>Right Link</Link>
		</Toolbar>
		{/* Page content */}

		<BlockTitle>Navigation</BlockTitle>
		<List>
			<ListItem link="/about/" title="About" />
			<ListItem link="/form/" title="Form" />
		</List>

		<BlockTitle>Modals</BlockTitle>
		<Block strong>
			<Row>
				<Col width="50">
					<Button fill raised popupOpen="#login-popup">
						Login
					</Button>
				</Col>
				<Col width="50">
					<Button fill raised popupOpen="#register-popup">
						Register
					</Button>
				</Col>
			</Row>
		</Block>
		<Block strong>
			<Row>
				<Col width="50">
					<Button fill raised popupOpen="#notification-popup">
						Notification
					</Button>
				</Col>
				<Col width="50">
					<Button fill raised popupOpen="#register-popup">
						Register
					</Button>
				</Col>
			</Row>
		</Block>

		<BlockTitle>Panels</BlockTitle>
		<Block strong>
			<Row>
				<Col width="50">
					<Button fill raised panelOpen="left">
						Left Panel
					</Button>
				</Col>
				<Col width="50">
					<Button fill raised panelOpen="right">
						Right Panel
					</Button>
				</Col>
			</Row>
		</Block>

		<List>
			<ListItem
				title="Dynamic (Component) Route"
				link="/dynamic-route/blog/45/post/125/?foo=bar#about"
			/>
			<ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/" />
			<ListItem title="Request Data & Load" link="/request-and-load/user/123456/" />
		</List>
	</Page>
);
