import React from 'react';

export const BackIcon = props => (
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
				<path
					fill="#344252"
					d="M12.325 22.003H23.5v2H12.332l3.24 3.24-1.415 1.414L8.5 23l5.657-5.657 1.414 1.414z"
				/>
			</g>
		</g>
	</svg>
);
