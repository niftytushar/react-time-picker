var React = require('react');
var ReactDOM = require('react-dom');
var ReactTimePicker = require('react-time-picker');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactTimePicker />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
