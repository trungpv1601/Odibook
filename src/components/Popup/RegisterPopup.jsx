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
import RegisterBG from '../../assets/svg/register-bg.svg';

export class RegisterPopup extends Component {
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
			<Popup id="register-popup" opened={this.state.opened}>
				<View>
					<Page>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								background: `url(${RegisterBG})`,
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
										Create Account
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
										Create an account to feel the whole experience of Odibook.
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
										name="name"
										label="Full Name"
										floatingLabel
										outline
										clearButton
										value={this.state.name}
										onInput={e => this.setState({ name: e.target.value })}
									></ListInput>
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
								</List>
								<div>
									<Button
										fill
										loginScreenClose
										large
										style={{
											fontWeight: '800'
										}}
									>
										Create an Account
									</Button>
									<BlockFooter>
										<p className="text-align-center">
											By signing up, you confirm that you are agree to our Terms and Conditions, and
											have read and understood of Privacy Policy.
										</p>
									</BlockFooter>
								</div>
							</Block>
						</div>
					</Page>
				</View>
			</Popup>
		);
	}
}
