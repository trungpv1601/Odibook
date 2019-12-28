import React from 'react';

export function LockoutIcon(props) {
	return (
		<svg width={24} height={24} viewBox="0 0 24 24" {...props}>
			<title>{'SVG/White/black/UI/logout'}</title>
			<g fill="none" fillRule="evenodd">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M6.825 13l3.246 3.246-1.414 1.414L3 12.003l1-1V11h.003l4.654-4.654 1.414 1.415L6.831 11H16v2H6.825zM12 6V4h9v16h-9v-2h7V6h-7z"
					fill={props.color ? props.color : '#000'}
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
}
