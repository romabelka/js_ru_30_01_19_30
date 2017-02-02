import React from 'react'

export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>
                {article.text}
            </section>
        </div>
    )
}