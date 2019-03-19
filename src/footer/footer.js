import React from 'react';
import style from './footer.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return <div className={style.footer}>
            <div>
                <a href="https://www.linkedin.com/in/johntkline">LinkedIn</a> | <a href="https://github.com/jtkline1205">Github</a> | <a href="/resumes/John_Kline_2019_3_01.pdf" download>Résumé</a>
            </div>
            <div>
                Copyright John T Kline 2019
            </div>
        </div>
    }
}