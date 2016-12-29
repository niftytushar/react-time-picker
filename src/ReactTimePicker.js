import React from 'react';

export default class ReactTimePicker extends React.Component {
  constructor() {
    super();

    this.state = {
      hour: 0,
      minute: 0,
    };

    this.onHourSelect = this.onHourSelect.bind(this);
  }

  onHourSelect(event) {
    event.stopPropagation();

    this.setState({
      hour: event.target.dataset.value,
    });
  }

  onMinuteSelect(event) {
    event.stopPropagation();

    this.setState({
      minute: event.target.dataset.value,
    });
  }

	render () {
    const hours = Array.from(new Array(12), (val, index) => index + 1);
    const minutes = Array.from(new Array(60), (val, index) => index + 1);

		return <div className="rtp">
      <input type="text" />
      <div className="rtp-dropdown">
        <ul onClick={this.onHourSelect}>
          {
            hours.map((hour) => {
              return <li key={hour} data-value={hour}>{hour}</li>
            })
          }
        </ul>
        <ul>
          {
            minutes.map((minute) => {
              return <li key={minute} data-value={minute}>{minute}</li>
            })
          }
        </ul>
        <ul>
          <li>AM</li>
          <li>PM</li>
        </ul>
      </div>
    </div>;
	}
};
