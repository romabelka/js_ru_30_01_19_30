import React, { Component } from 'react'

class Answer extends Component {

  state = {
    name: '',
    comment: ''
  }

  render() {
    return(
      <form>
        Name: 
        <input 
          value={this.state.name}
          onChange={(ev) => this.setState({name: ev.target.value})} 
          />
        <br />
        Comment:  
          <textarea 
            value={this.state.comment} 
            onChange={(ev) => this.setState({comment: ev.target.value})}
          />
        <br />
        <button type="submit" onClick={this.answerСommun}> send </button>
      </form>
    )
  }

  answerСommun = (ev) => {
    ev.preventDefault()
    console.log(`Name: ${this.state.name}\nComment: ${this.state.comment} `)
    this.setState({
      name: '',
      comment: ''
    })
  }

}

export default Answer