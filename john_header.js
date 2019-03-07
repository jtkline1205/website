'use strict';

const e = React.createElement;

class JohnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
	    return React.createElement(
		  "div",
		  {className: "text-center"},
		  React.createElement("h1", null, "John T Kline"),
		  React.createElement("h4", null, "Software Engineer"),
		  React.createElement("h6", null, "Java | Javascript | SQL | Scrum")
		);
	}
}

const johnHeader = document.querySelector('#john-header');
ReactDOM.render(e(JohnHeader), johnHeader);


