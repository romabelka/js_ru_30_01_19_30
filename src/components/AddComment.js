import React, {Component, PropTypes} from 'react'

export default class AddComment extends Component {
    constructor(props) {
        super(props)
        this.handleClickSubmit = this.handleClickSubmit.bind(this)
    }

    state = {
        text: null,
        isOpen: false
    }

    //ВОПРОС ВОПРОС ВОПРОС ВОПРОС ВОПРОС!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //ВОПРОС ВОПРОС ВОПРОС ВОПРОС ВОПРОС!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //ВОПРОС ВОПРОС ВОПРОС ВОПРОС ВОПРОС!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //на сколько правильно делать так как в handleClickSubmit для очищения поля???
    handleClickSubmit(ev) {
        this.refs.inputUsername.value=''
        this.refs.inputText.value=''
        ev.preventDefault()
        this.setState({
            text: null
        })
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleText = text => this.setState({text})

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <div>
                <form>
                    Username: <input 
                        name="Username"
                        type="text" 
                        ref="inputUsername"
                        onChange={this.handleText} />
                    Text: <input 
                        name="Text"
                        type="textarea" 
                        ref="inputText"
                        onChange={this.handleText} />
                    <input 
                        type="submit"
                        value="submit"
                        onClick={this.handleClickSubmit} />
                </form>
            </div>
        )
    }

    render() {
        const addNewComment = this.state.isOpen ? 'Close' : 'Add New Comment'
        
        return (
            <div >
                <a href="#" onClick={this.toggleOpen} >{addNewComment}</a>
                {this.getBody()}
            </div>
        )
    }
}