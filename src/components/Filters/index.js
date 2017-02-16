import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'

class Filters extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div>
                <ArticlesSelect/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters