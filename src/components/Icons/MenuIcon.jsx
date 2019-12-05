import React from 'react';

export const MenuIcon = props => (
	<svg width={48} height={62} {...props}>
		<title>{'Menu Icon'}</title>
		<defs>
			<filter
				x="-40.6%"
				y="-23.9%"
				width="181.2%"
				height="156.5%"
				filterUnits="objectBoundingBox"
				id="prefix__a"
			>
				<feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
				<feGaussianBlur stdDeviation={4} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
				<feColorMatrix
					values="0 0 0 0 0.241044342 0 0 0 0 0.320788249 0 0 0 0 0.400532156 0 0 0 0.08 0"
					in="shadowBlurOuter1"
				/>
			</filter>
			<rect id="prefix__b" x={0} y={0} width={32} height={46} rx={8} />
		</defs>
		<g fill="none" fillRule="evenodd">
			<use filter="url(#prefix__a)" xlinkHref="#prefix__b" fill="#000" transform="translate(8 6)" />
			<g transform="translate(8 6)">
				<rect fill="#FFF" width={32} height={46} rx={8} />
				<path fill="none" d="M4 11h24v24H4z" />
				<path d="M16 27v2H8v-2h8zm8-5v2H8v-2h16zm0-5v2h-8v-2h8z" fill="#344252" />
			</g>
		</g>
	</svg>
);
