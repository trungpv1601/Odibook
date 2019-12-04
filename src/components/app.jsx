import React from 'react';
import {
	App,
	Panel,
	Views,
	View,
	Popup,
	Page,
	Navbar,
	Toolbar,
	NavRight,
	Link,
	Block,
	BlockTitle,
	LoginScreen,
	LoginScreenTitle,
	List,
	ListItem,
	ListInput,
	ListButton,
	BlockFooter,
	Subnavbar
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';
import { BackIcon } from './Icons';

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
				<Popup id="my-popup">
					<View>
						<Page>
							<Navbar title="Popup">
								<NavRight>
									<Link popupClose>Close</Link>
								</NavRight>
							</Navbar>
							<Block>
								<p>Popup content goes here.</p>
							</Block>
						</Page>
					</View>
				</Popup>

				<LoginScreen id="my-login-screen" opened={true}>
					<View>
						<Page>
							<Navbar noHairline={true} noShadow={true} sliding={false}>
								<Subnavbar style={{ border: 'none' }}>
									<Link loginScreenClose>
										<BackIcon />
									</Link>
								</Subnavbar>
							</Navbar>
							<Block
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
                }}
                className="no-margin-top"
							>
								<p
									className="no-margin-bottom"
									style={{ fontSize: '32px', color: '#FFFFFF', fontWeight: '800' }}
								>
									Login
								</p>
								<p
									className="no-margin-top"
									style={{
										textAlign: 'center',
										fontSize: '14px',
										color: '#FFFFFF',
										fontWeight: '500'
									}}
								>
									Create an account to experience the new way reading a book with Odibook.
								</p>
							</Block>
							<Block>
								<List form>
									<ListInput
										type="text"
										name="username"
										placeholder="Your username"
										value={this.state.username}
										onInput={e => this.setState({ username: e.target.value })}
									></ListInput>
									<ListInput
										type="password"
										name="password"
										placeholder="Your password"
										value={this.state.password}
										onInput={e => this.setState({ password: e.target.value })}
									></ListInput>
								</List>
								<List>
									<ListButton
										title="Sign In"
										loginScreenClose
										onClick={() => this.alertLoginData()}
									/>
									<BlockFooter>
										Some text about login information.
										<br />
										Click "Sign In" to close Login Screen
									</BlockFooter>
								</List>
							</Block>
						</Page>
					</View>
				</LoginScreen>
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
