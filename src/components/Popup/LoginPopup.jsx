import React, { Component } from 'react';
import {
	View,
	Popup,
	Page,
	Link,
	Block,
	List,
	ListInput,
	BlockFooter,
	Button
} from 'framework7-react';
import { BackIcon } from '../Icons';
import LoginBG from '../../assets/svg/login-bg.svg';

export class LoginPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			opened: false
		};
	}

	render() {
		return (
			<Popup id="login-popup" opened={this.state.opened}>
				<View>
					<Page>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								background: `url(${LoginBG})`,
								backgroundRepeat: 'no-repeat',
								backgroundPositionX: 'right',
								backgroundPositionY: '20%'
							}}
						>
							<Block
								className="no-padding"
								style={{
									height: '25%'
								}}
							>
								<Block className="no-margin">
									<Link popupClose>
										<BackIcon />
									</Link>
								</Block>
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
										style={{
											fontSize: '32px',
											color: '#FFFFFF',
											fontWeight: '800'
										}}
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
							</Block>
							<Block
								className="no-margin"
								style={{
									backgroundColor: '#fff',
									height: '75%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									borderRadius: '30px 30px 0 0',
									paddingTop: '20px',
									paddingBottom: 'var(--f7-block-margin-vertical)'
								}}
							>
								<List form className="no-margin-top" noHairlines>
									<ListInput
										type="text"
										name="username"
										label="Email Address"
										floatingLabel
										outline
										clearButton
										value={this.state.username}
										onInput={e => this.setState({ username: e.target.value })}
									></ListInput>
									<ListInput
										type="password"
										name="password"
										label="Password"
										floatingLabel
										outline
										clearButton
										value={this.state.password}
										onInput={e => this.setState({ password: e.target.value })}
									></ListInput>
									<BlockFooter>
										<Link className="float-right" style={{ fontWeight: 800 }}>
											Forgot Password
										</Link>
									</BlockFooter>
								</List>
								<Button
									fill
									loginScreenClose
									large
									style={{
										fontWeight: '800'
									}}
								>
									Login
								</Button>
							</Block>
						</div>
					</Page>
				</View>
			</Popup>
		);
	}
}
