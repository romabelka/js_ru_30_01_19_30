import React from 'react'
import moment from 'moment'
import DayPicker, {DateUtils} from 'react-day-picker'

import 'react-day-picker/lib/style.css'


export default class RangeDays extends React.Component {
    constructor(props) {
        super(props)
        this.handleDayClick = this.handleDayClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
    }

    state = {
        from: null,
        to: null
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    handleResetClick(e) {
        e.preventDefault()
        this.setState({
            from: null,
            to: null
        })
    }

    render() {
        const { from, to } = this.state
        return (
            <div>
                <DayPicker
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick} />
                <h1 onClick={this.handleResetClick}>
                    Reset
                </h1>
                <h3>
                    choose from {moment(from).format('L')} to {moment(to).format('L')}
                </h3>
            </div>
        )
    }
}