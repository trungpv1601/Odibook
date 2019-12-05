import React from 'react';

export const SearchIcon = props => (
	<svg width={48} height={62} {...props}>
		<title>{'Search Icon'}</title>
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
				<path
					d="M15 15a7 7 0 015.618 11.176l3.094 3.114c.033.034.064.07.092.107l.615.62-1.414 1.415-3.808-3.83A7 7 0 1115 15zm0 2a5 5 0 100 10 5 5 0 000-10z"
					fill="#344252"
				/>
			</g>
		</g>
	</svg>
);
