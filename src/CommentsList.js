import React, {Component} from 'react'
import Comments from './Comments'

export default class CommentsList extends Component {
  render(){
    let { article: { comments } } = this.props
    const commentsElements = comments.map((comments) => <div key={comments.id}><Comments comments={comments}/></div>)
    return ( <ul>{commentsElements}</ul> )
  }
}