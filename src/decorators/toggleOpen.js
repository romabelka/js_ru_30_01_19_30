//HOC - Higher Order Component === decorator
import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        isOpen: false,
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openArticleId
        })
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpenArticle}/>
    }
}