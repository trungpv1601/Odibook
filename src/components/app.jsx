import React from 'react';
import { App, View } from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';
import { LoginPopup, RegisterPopup, NotificationPopup } from './Popup';
import PanelLeft from './PanelLeft';

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
			<App params={this.state.f7params} style={{ backgroundColor: 'var(--f7-theme-color)' }}>
				{/* Left panel with cover effect when hidden */}
				<PanelLeft />

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
