import React, {Component} from 'react'
import Comments from './Comments'

//А где чать с открыть/закрыть список?
export default class CommentsList extends Component {
  render(){
    let { article: { comments } } = this.props
    //откуда comments.id, это же массив?
    const commentsElements = comments.map((comments) => <div key={comments.id}><Comments comments={comments}/></div>)
    return ( <ul>{commentsElements}</ul> )
  }
}
