import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {

  state = {
    isOpen: false
  }
/*
  constructor(props) {
      super(props)
      this.state = {
          isOpen: props.defaultOpen
      }
  }
*/

  render() {
    let { article } = this.props
    return (
      <div>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {this.getBody()}
      </div>
    )
  }



  getBody() {
    if (!this.state.isOpen) return null
    let { article } = this.props
    let { article: { comments } } = this.props
    //Я б эту проверку спрятал в CommentList
    let commentsList = comments ? <CommentsList article={article}/> : ''
    return (
      <section>
        {article.text}
        {commentsList}
      </section>
    )
  }

  handleClick = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
