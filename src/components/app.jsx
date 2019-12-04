import React from 'react';
import { App, Panel, View, Page, Navbar, BlockTitle, List, ListItem } from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';
import { LoginPopup, RegisterPopup, NotificationPopup } from './Popup';

export default class extends React.Component {
	constructor() {
		super();

		this.state = {
			// Framework7 Parameters
			f7params: {
				id: 'com.vk1ng.odibook', // App bundle ID
				name: 'Odibook', // App name
				theme: 'ios', // Automatic theme detection
				iosTranslucentBars: false,
				// App root data
				data: function() {
					return {
						user: {
							firstName: 'John',
							lastName: 'Doe'
						}
					};
				},

				// App routes
				routes: routes,

				// Register service worker
				serviceWorker: this.$device.cordova
					? {}
					: {
							path: '/service-worker.js'
					  },
				// Input settings
				input: {
					scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
					scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
				},
				// Cordova Statusbar settings
				statusbar: {
					iosOverlaysWebView: true,
					androidOverlaysWebView: false
				}
			},
			// Login screen demo data
			username: '',
			password: ''
		};
	}
	render() {
		return (
			<App params={this.state.f7params}>
				{/* Left panel with cover effect when hidden */}
				<Panel left cover themeDark visibleBreakpoint={960}>
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

				{/* Your main view, should have "view-main" class */}
				<View main className="safe-areas" url="/" />

				{/* Popup */}

				<LoginPopup />
				<RegisterPopup />
				<NotificationPopup />
			</App>
		);
	}
	alertLoginData() {
		this.$f7.dialog.alert(
			'Username: ' + this.state.username + '<br>Password: ' + this.state.password
		);
	}
	componentDidMount() {
		this.$f7ready(f7 => {
			// Init cordova APIs (see cordova-app.js)
			if (f7.device.cordova) {
				cordovaApp.init(f7);
			}
			// Call F7 APIs here
		});
	}
}
