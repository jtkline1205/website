import React from 'react';
import style from './john_header.css'

export default class JohnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
	    return <div className={style.textCenter}>
            <h1>John T Kline</h1>
            <h4>Software Engineer</h4>
            <h6>Java | Javascript | SQL | Scrum</h6>
        </div>
	}
}