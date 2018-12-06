import React, { Component } from 'react';
import '../App.css';

class App extends Component {
	base = 'https://api.openweathermap.org/data/2.5/weather?q=';
	appId = '&appid=ac4bbd3c23dc38c5831469c1976a79ff';
	state = {
		city: '',
		data: {},
		error: ''
	};

	getData = url => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({ data });
			});
		console.log(this.state.data);
	};

	onBlur = _ => {
		const params = this.state.city;

		if (!params) {
			this.setState({
				error: 'Please type a city'
			});

			return;
		}

		this.setState({
			error: ''
		});

		this.getData(this.base + params + this.appId);
	};

	onSuccess = position => {
		const { latitude, longitude } = position.coords;
		const params = `?lat=${latitude}&lon=${longitude}`;

		this.getData(this.base + params + this.appId);
	};

	onError = e => {
		const error = typeof e === 'string' ? e : JSON.stringify(e, null, 2);

		this.setState({
			error
		});
	};

	componentDidMount = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this.onSuccess,
				this.onError
			);
		} else {
			this.onError('Geolocation not supported.');
		}
	};

	temp = kelvin => Math.round(kelvin - 273.15);

	renderData = data => {
		if (!Object.keys(data).length) {
			return null;
		}

		if (data.cod === '404') {
			return <h2>{data.message}</h2>;
		}

		return (
			<div className="info">
				<h2>
					{data.name}, {data.sys.country}
				</h2>

				<img
					src={`//openweathermap.org/img/w/${
						data.weather[0].icon
					}.png`}
					alt={data.weather[0].description}
				/>

				<p>Current temp: {this.temp(data.main.temp)}&deg; C</p>

				<p>Maximum temp: {this.temp(data.main.temp_max)}&deg; C</p>

				<p>Minimum temp: {this.temp(data.main.temp_min)}&deg; C</p>

				<p>Humidity: {data.main.humidity} %</p>

				<p>Pressure: {data.main.pressure} hpa</p>

				<p>Wind speed: {data.wind.speed} m/s</p>
			</div>
		);
	};

	render() {
		const { city, data, error } = this.state;

		return (
			<React.Fragment>
				<h1 className="center">What`s the Weather</h1>

				<div className="SecondApp">
					<input
						type="text"
						placeholder="Type a city..."
						value={city}
						onBlur={this.onBlur}
						onChange={e => this.setState({ city: e.target.value })}
					/>

					<button type="button" onClick={this.onBlur}>
						Get weather
					</button>
					<div className="error">
						{this.renderData(data)}
						{error && <h3>{error}</h3>}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
