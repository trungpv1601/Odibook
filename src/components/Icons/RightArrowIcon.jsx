import React from 'react';

export const RightArrowIcon = props => (
	<svg width={24} height={24} {...props}>
		<title>{'icon/Symbol/arrow-right/SVG'}</title>
		<g fill="none" fillRule="evenodd">
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				fill={props.color ? props.color : '#000'}
				fillRule="nonzero"
				d="M15.675 11.003l-3.246-3.246 1.414-1.414L19.5 12l-5.657 5.657-1.414-1.414 3.24-3.24H4.5v-2z"
			/>
		</g>
	</svg>
);
