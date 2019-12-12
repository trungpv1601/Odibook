import React, { Component } from 'react';
import { Panel, View, Page } from 'framework7-react';
import PanelLeftBG from '../assets/svg/background/7.svg';

class PanelLeft extends Component {
	render() {
		return (
			<Panel left reveal visibleBreakpoint={960}>
				<View>
					<Page
						style={{
							background: `url(${PanelLeftBG})`,
							backgroundRepeat: 'no-repeat',
							backgroundPositionX: 'right',
							// backgroundPositionY: '20%',
							backgroundColor: 'var(--f7-theme-color)'
						}}
					></Page>
				</View>
			</Panel>
		);
	}
}

export default PanelLeft;
