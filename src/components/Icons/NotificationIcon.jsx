import React from 'react';

export const NotificationIcon = props => (
	<svg width={64} height={64} {...props}>
		<title>{'button/icon/64px'}</title>
		<defs>
			<linearGradient x1="100%" y1="34.741%" x2="-7.704%" y2="147.94%" id="prefix__d">
				<stop stopColor="#FFF" stopOpacity={0} offset="0%" />
				<stop stopColor="#FFF" stopOpacity={0.32} offset="100%" />
			</linearGradient>
			<linearGradient x1="-54.166%" y1="-35.845%" x2="135.041%" y2="90.091%" id="prefix__f">
				<stop stopColor="#BDA6EB" offset="0%" />
				<stop stopColor="#9377CD" offset="100%" />
			</linearGradient>
			<linearGradient x1="127.091%" y1="-44.204%" x2="0%" y2="56.044%" id="prefix__g">
				<stop stopColor="#BDA6EB" offset="0%" />
				<stop stopColor="#9377CD" offset="100%" />
			</linearGradient>
			<linearGradient x1="39.023%" y1="-30.649%" x2="59.153%" y2="81.239%" id="prefix__h">
				<stop stopColor="#BDA6EB" offset="0%" />
				<stop stopColor="#9377CD" offset="100%" />
			</linearGradient>
			<rect id="prefix__a" x={0} y={0} width={375} height={812} rx={40} />
			<rect id="prefix__c" x={0} y={0} width={375} height={812} rx={40} />
		</defs>
		<g transform="translate(-156 -241)" fill="none" fillRule="evenodd">
			<mask id="prefix__b" fill="#fff">
				<use xlinkHref="#prefix__a" />
			</mask>
			<use fill="#7E59CB" xlinkHref="#prefix__a" />
			<g mask="url(#prefix__b)">
				<mask id="prefix__e" fill="#fff">
					<use xlinkHref="#prefix__c" />
				</mask>
				<use fill="#7E59CB" xlinkHref="#prefix__c" />
				<path
					d="M30.5 564C99.812 564 156 507.812 156 438.5S99.812 313 30.5 313-95 369.188-95 438.5-38.812 564 30.5 564zm.5-32c-51.915 0-94-42.085-94-94s42.085-94 94-94 94 42.085 94 94-42.085 94-94 94z"
					fill="url(#prefix__d)"
					fillRule="nonzero"
					mask="url(#prefix__e)"
				/>
				<g mask="url(#prefix__e)">
					<path
						fill="url(#prefix__f)"
						d="M0 128h128v128H0z"
						transform="rotate(-45 214.08 -185.655)"
					/>
					<path
						fill="url(#prefix__g)"
						d="M128 0h128v128L128 256V128H0z"
						transform="rotate(-45 214.08 -185.655)"
					/>
					<path
						fill="url(#prefix__h)"
						d="M256 0v128L128 256V128z"
						transform="rotate(-45 214.08 -185.655)"
					/>
				</g>
			</g>
			<g mask="url(#prefix__b)">
				<g fill="#FFF" transform="translate(156 241)">
					<circle fillOpacity={0.24} cx={32} cy={32} r={32} />
					<path fill="none" d="M16 16h32v32H16z" />
					<path d="M24 37.333h16V32a8 8 0 10-16 0v5.333zm10.667 4a2.667 2.667 0 01-5.334 0h5.334zM32 18.667c.736 0 1.333.597 1.333 1.333v1.416c5.262.656 9.334 5.145 9.334 10.584v8H21.333v-8c0-5.44 4.072-9.928 9.333-10.584V20c0-.736.598-1.333 1.334-1.333z" />
				</g>
			</g>
		</g>
	</svg>
);
