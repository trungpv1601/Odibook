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
import { BackIcon, NotificationIcon } from '../Icons';
import NotificationBG from '../../assets/svg/notification-bg.svg';

export class NotificationPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false
		};
	}

	render() {
		return (
			<Popup id="notification-popup" opened={this.state.opened}>
				<View>
					<Page>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								background: `url(${NotificationBG})`,
								backgroundRepeat: 'no-repeat',
								backgroundPositionX: 'right',
								backgroundPositionY: '50%',
								backgroundColor: "var(--f7-theme-color)"
							}}
						>
							<Block
								className="no-padding"
								style={{
									height: '70%'
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
										alignItems: 'center',
										height: '100%',
										justifyContent: 'center'
									}}
									className="no-margin-top"
								>
									<NotificationIcon />
									<p
										className="no-margin"
										style={{
											fontSize: '32px',
											color: '#FFFFFF',
											fontWeight: '800'
										}}
									>
										Never miss out
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
										Get notification lorem ipsum sir dolor amet
									</p>
								</Block>
							</Block>
							<Block
								className="no-margin"
								style={{
									backgroundColor: '#fff',
									height: '30%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-around',
									paddingTop: '20px',
									paddingBottom: 'var(--f7-block-margin-vertical)'
								}}
							>
								<Button
									fill
									loginScreenClose
									large
									style={{
										fontWeight: '800'
									}}
								>
									Enable Notification
								</Button>
								<Button
									fill
									loginScreenClose
									large
									color="e0d7f3"
									style={{
										fontWeight: '800'
									}}
								>
									Skip for Now
								</Button>
							</Block>
						</div>
					</Page>
				</View>
			</Popup>
		);
	}
}
