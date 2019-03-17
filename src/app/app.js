import React from 'react';
import JohnHeader from '../john_header'
import Bookshelf from '../bookshelf'
import Newswire from '../newswire'
import Footer from '../footer'
import style from './app.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return <div className={style.container}>
            <JohnHeader/>
            <hr/>
            <Bookshelf/>
            <hr/>
            <Newswire/>
            <hr/>
            <Footer/>
        </div>
    }
}