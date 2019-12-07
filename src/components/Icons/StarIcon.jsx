import React from 'react';

export const StarIcon = props => (
	<svg width={14} height={15} {...props}>
		<title>{'Star'}</title>
		<defs>
			<filter
				x="-21.9%"
				y="-24.5%"
				width="143.8%"
				height="151%"
				filterUnits="objectBoundingBox"
				id="prefix__a"
			>
				<feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
				<feGaussianBlur stdDeviation={16} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
				<feColorMatrix
					values="0 0 0 0 0.243358065 0 0 0 0 0.243358065 0 0 0 0 0.282891757 0 0 0 0.16 0"
					in="shadowBlurOuter1"
				/>
			</filter>
			<rect id="prefix__b" x={0} y={144} width={224} height={192} rx={16} />
		</defs>
		<g transform="translate(-61 -292)" fill="none" fillRule="evenodd">
			<use filter="url(#prefix__a)" xlinkHref="#prefix__b" fill="#000" />
			<rect fill="transparent" fillRule="nonzero" y={144} width={224} height={192} rx={16} />
			<path
				d="M67.767 304.122l-3.573 1.879a.5.5 0 01-.725-.527l.682-3.979a.5.5 0 00-.143-.442l-2.891-2.818a.5.5 0 01.277-.853l3.995-.58a.5.5 0 00.376-.274l1.787-3.62a.5.5 0 01.896 0l1.787 3.62a.5.5 0 00.376.274l3.995.58a.5.5 0 01.277.853l-2.89 2.818a.5.5 0 00-.144.442l.682 3.979a.5.5 0 01-.725.527l-3.573-1.879a.5.5 0 00-.466 0z"
				fill="#FFBE46"
			/>
		</g>
	</svg>
);
