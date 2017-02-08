import React, {PropTypes} from 'react'

export default (Component) => class CheckingComponent extends React.Component {
    static propTypes = {
      article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
          }).isRequired
        )
      }).isRequired
    }

  render() {
    return <Component {...this.props} {...this.state} />
  }
}