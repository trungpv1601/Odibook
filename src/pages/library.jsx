import React from 'react';
import {
	Page,
	Link,
	Block,
	Swiper,
	SwiperSlide,
	ListItem,
	List,
	Navbar,
	NavLeft,
	NavRight,
	BlockTitle,
	Searchbar,
	Row,
	Col
} from 'framework7-react';
import { BackIcon, StarIcon } from '../components/Icons';
import PageBG from '../assets/svg/background/12.svg';
import BookCover1 from '../assets/svg/book-cover/medium/1.svg';
import BookCover2 from '../assets/svg/book-cover/medium/2.svg';
import BookCover3 from '../assets/svg/book-cover/medium/3.svg';
import BookCover4 from '../assets/svg/book-cover/medium/4.svg';

export default () => (
	<Page
		name="library"
		style={{
			height: '100%',
			background: `url(${PageBG})`,
			backgroundRepeat: 'no-repeat',
			backgroundPositionX: 'right',
			backgroundPositionY: '10%',
			backgroundColor: 'var(--f7-theme-color)',
			backgroundSize: 'cover'
		}}
	>
		<Navbar className="nav-bg-custom">
			<NavLeft>
				<Link back>
					<BackIcon />
				</Link>
			</NavLeft>
		</Navbar>
		{/* Page content */}
		<p className="text-align-center" style={{ fontSize: '32px', color: '#fff', fontWeight: 800 }}>
			Library
		</p>
		<div
			style={{
				backgroundColor: '#fff',
				padding: 'var(--f7-block-margin-vertical) 0',
				paddingLeft: 'calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-left))',
				paddingRight: 'calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-right))',
				borderRadius: '20px 20px 0 0'
			}}
		>
			<Searchbar placeholder="Search for in library"></Searchbar>
			<Block className="searchbar-not-found">
				<p>Not found</p>
			</Block>
			<Block className="search-list searchbar-found">
				<Row>
					<Col width="50" style={{ paddingBottom: 'var(--f7-block-margin-vertical)' }}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img width="100%" src={BookCover1} />
						</div>
						<p
							className="no-margin-bottom"
							style={{
								fontWeight: '800',
								color: '#171F29',
								fontSize: '14px'
							}}
						>
							Nebula Grieving
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<span
								style={{
									fontWeight: '500',
									color: '#9AA7B8',
									fontSize: '12px'
								}}
							>
								Yara Barros
							</span>
							<span
								style={{
									display: 'flex',
									fontWeight: '800',
									color: '#FFB319',
									fontSize: '12px'
								}}
							>
								<StarIcon />
								<span style={{ marginLeft: '5px' }}>3.2</span>
							</span>
						</div>
					</Col>
					<Col width="50" style={{ paddingBottom: 'var(--f7-block-margin-vertical)' }}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img width="100%" src={BookCover2} />
						</div>
						<p
							className="no-margin-bottom"
							style={{
								fontWeight: '800',
								color: '#171F29',
								fontSize: '14px'
							}}
						>
							Nebula Grieving
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<span
								style={{
									fontWeight: '500',
									color: '#9AA7B8',
									fontSize: '12px'
								}}
							>
								Yara Barros
							</span>
							<span
								style={{
									display: 'flex',
									fontWeight: '800',
									color: '#FFB319',
									fontSize: '12px'
								}}
							>
								<StarIcon />
								<span style={{ marginLeft: '5px' }}>3.2</span>
							</span>
						</div>
					</Col>
					<Col width="50" style={{ paddingBottom: 'var(--f7-block-margin-vertical)' }}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img width="100%" src={BookCover3} />
						</div>
						<p
							className="no-margin-bottom"
							style={{
								fontWeight: '800',
								color: '#171F29',
								fontSize: '14px'
							}}
						>
							Nebula Grieving
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<span
								style={{
									fontWeight: '500',
									color: '#9AA7B8',
									fontSize: '12px'
								}}
							>
								Yara Barros
							</span>
							<span
								style={{
									display: 'flex',
									fontWeight: '800',
									color: '#FFB319',
									fontSize: '12px'
								}}
							>
								<StarIcon />
								<span style={{ marginLeft: '5px' }}>3.2</span>
							</span>
						</div>
					</Col>
					<Col width="50" style={{ paddingBottom: 'var(--f7-block-margin-vertical)' }}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<img width="100%" src={BookCover4} />
						</div>
						<p
							className="no-margin-bottom"
							style={{
								fontWeight: '800',
								color: '#171F29',
								fontSize: '14px'
							}}
						>
							Nebula Grieving
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<span
								style={{
									fontWeight: '500',
									color: '#9AA7B8',
									fontSize: '12px'
								}}
							>
								Yara Barros
							</span>
							<span
								style={{
									display: 'flex',
									fontWeight: '800',
									color: '#FFB319',
									fontSize: '12px'
								}}
							>
								<StarIcon />
								<span style={{ marginLeft: '5px' }}>3.2</span>
							</span>
						</div>
					</Col>
				</Row>
			</Block>
		</div>
	</Page>
);
