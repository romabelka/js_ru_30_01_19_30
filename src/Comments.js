import React, {Component} from 'react'

//Зачем ты делал список внутри списка?
export default class Comments extends Component {
	state = {
    isOpen: false
  }

	comment(){
		let { comments } = this.props
		if (!this.state.isOpen) return
		return( <p>{comments.text}</p> )
	}

	userNaye(){
		let { comments } = this.props
		return ( <h4>{comments.user}</h4> )
	}

	button(){
		return (<button onClick={this.targgetComment}>{!this.state.isOpen ? 'show' : 'hide'}</button>)
	}

  render() {
  	return (
  		<div>
	  		{this.userNaye()}
	  		{this.comment()}
	  		{this.button()}
	  	</div>
  	)
  }

  targgetComment = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }  
}
