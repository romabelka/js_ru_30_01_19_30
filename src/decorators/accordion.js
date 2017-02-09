import React, {Component as ReactComponent}  from 'react'

export default (Component) => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        return <Component {...this.props} isOpenItem = {this.isOpenItem} toggleOpenItem = {this.toggleOpenItem}/>
    }

    isOpenItem = id => this.state.openItemId === id


    toggleOpenItem = id => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openItemId: this.isOpenItem(id) ? null : id
        })
    }
}