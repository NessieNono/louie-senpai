import React from 'react';
import { Row, Col } from 'antd';

import Intro from './components/intro/Intro';
import Aca from './components/aca/Aca';
import Extra from './components/extra/Extra';
import Free from './components/free/Free';

import 'antd/dist/antd.css';
import './styles/App.scss';
import Preview from 'components/Preview';

function App() {
	return (
		<div>
			<Row className="top-hero">
				<Col span={24}>
					<div className="center-content-container">
						<h1 className="big-bold-text">Louie Senpai</h1>
						<br />
					</div>
				</Col>
			</Row>

			<div className="app-container">
				<Row>
					<Col sm={24} md={24} lg={12} className="custom-col">
						<Intro />
						<Aca />
						<Extra />
						<Free />
					</Col>
					<Col sm={24} md={24} lg={12} className="custom-col custom-col-left">
						<Preview />
						<img
							className="hero-image"
							src="https://media2.giphy.com/media/3o7TKM5fnYxPD8sGhW/source.gif"
						/>
						<p>this gif is copyright "jjjjjohn Sticker" please dont sue me</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
