import React from 'react';
import '../App.css';

class ThirdApp extends React.Component {
	base = 'https://api.openweathermap.org/data/2.5/weather?q=';
	appId = '&appid=ac4bbd3c23dc38c5831469c1976a79ff';

	state = {
		info: {},
		city: '',
		error: '',
		history: []
	};

	getData = url => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					info: data,
					history: [data, ...this.state.history]
				});
				// this.setState(state => {
				// 	const history = state.history.push(state.info);
				// });
			});

		console.log(this.state.history);
	};

	handleChange = e => {
		this.setState({
			city: e.target.value
		});
	};

	handleClick = () => {
		const params = this.state.city;
		//console.log(params);
		if (!params) {
			this.setState({
				error: 'Please enter city'
			});
			return;
		} else {
			this.setState({
				error: ''
			});
		}

		//console.log(this.state.error);
		this.getData(this.base + params + this.appId);
	};

	toCelsius = para => Math.round(para - 273.15);

	renderHistory = _ => {
		return this.state.history.map((data, i) => this.renderData(data, i));
	};

	renderData = (info, i = -1) => {
		if (!Object.keys(info).length) {
			return null;
		}

		if (info.cod === '404') {
			return <h2>{info.message}</h2>;
		}

		//console.log(this.state.info.main.temp);

		return (
			<React.Fragment key={i}>
				<div className="center">
					<h2>
						{info.name}, {info.sys.country}
					</h2>

					<img
						src={`//openweathermap.org/img/w/${
							info.weather[0].icon
						}.png`}
						alt={info.weather[0].description}
					/>
				</div>
				<div className="center">
					<p> Current temp: </p>
					<p>
						Current temp: {this.toCelsius(info.main.temp)}
						&deg; C
					</p>
					<p>
						Maximum temp: {this.toCelsius(info.main.temp_max)}&deg;
						C
					</p>
					<p>
						Minimum temp: {this.toCelsius(info.main.temp_min)}&deg;
						C
					</p>
					<p>Humidity: {info.main.humidity} %</p>
					<p>Pressure: {info.main.pressure} hpa</p>
					<p>Wind speed: {info.wind.speed} m/s</p>
				</div>
			</React.Fragment>
		);
	};

	render() {
		const info = (
			<div className="SecondApp">
				<div>
					<input type="text" onChange={this.handleChange} />
					<button type="button" onClick={this.handleClick}>
						Find city
					</button>
				</div>
				<h2 className="center">{this.state.error}</h2>
				{/* {this.renderData(this.state.info)} */}
				{this.renderHistory(this.state.history)}
			</div>
		);

		return <div>{info}</div>;
	}
}

export default ThirdApp;
