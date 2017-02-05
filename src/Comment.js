import React from 'react'

export default function Comment (props){
    const {comment} = props
    return (
        <div>
            <span>
                {comment.user}
            </span>
            <p>
                {comment.text}
            </p>
        </div>
    )
}