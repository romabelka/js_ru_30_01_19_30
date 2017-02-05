import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    //Состояние
    state = {
        isOpen: false
    }
    render(){
        const {comments} = this.props
        const _this = this
        //возвращает коментарии если они существуют
        const commentElements = (function () {
                if(_this.isExist(comments)){
                    return(
                        comments.map((comment) => <li key={comment.id}>
                            <Comment comment={comment}/></li>)
                    )
                }else{
                    return null
                }

            })()

        return (
            <div>
                {this.getBtnState(comments)}
                {this.getBody(comments, commentElements)}
            </div>
        )

    }
    //Проверка существования
    isExist = function (arr) {
        if(arr) {return true}
        else {return false}
    }
    getBtnState(props){
        var _this = this
        const comments = props
        if(_this.isExist(comments)){
            if (!this.state.isOpen){
                return (
                    <button onClick={this.handleClick}>
                        show comments
                    </button>
                )
            }else{
                return(
                    <button onClick={this.handleClick}>
                        hide comments
                    </button>
                )
            }
        }else{
            return null
        }

    }
    //Получить список
    getBody = function(props, innerPart) {
        var _this = this
        const comments = props
        if (!this.state.isOpen) return null

        return (function () {
            if(_this.isExist(comments)){
                return(
                    <ul>
                        {innerPart}
                    </ul>
                )
            }else{
                return null
            }
        })()
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}