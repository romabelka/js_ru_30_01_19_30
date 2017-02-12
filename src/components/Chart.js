import React, { Component, PropTypes } from 'react'

class Chart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //do smth(draw a chart?) with this.refs.container
//        console.log('---', 'chart container: ', this.refs.container)
    }

    render() {
        return <div ref="container"/>
    }
}

export default Chart