import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.authFunc = this.authFunc.bind(this);
	}
	authFunc() {
		// data - address
		const authData = { data: "3MpTAdCF2iPJfo3dcnsamepmTBwx7S6NREZ" };
		if (WavesKeeper) {
			WavesKeeper.auth( authData )
				.then(auth => {
					console.log( auth ); //displaying the result on the console
					/*...processing data */
				}).catch(error => {
				console.error( error ); // displaying the result on the console
				/*...processing errors */
			})
		} else {
			alert("To Auth WavesKeeper should be installed.");
		}
	}
	render() {
		return (
			<div className="container">
				<input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
			</div>
		)
	}
}

const app = document.getElementById('app');
if(app){
	ReactDOM.render(<App/>, app);
}