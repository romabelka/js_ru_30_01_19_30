import React, { PropTypes } from 'react'

const activeStyle = {color: 'red'}
function Switcher(props) {
    const menuItems = props.items.map(item => {
        return <li style = {item == props.active ? activeStyle : {}}
                   key = {item}
                   onClick = {handleClick(props.onChange, item)}
            >
                {item}
            </li>
    })
    return (
        <ul>
            {menuItems}
        </ul>
    )
}

function handleClick(onChange, item) {
    return () => onChange(item)
}

Switcher.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func,
    active: PropTypes.string
}

export default Switcher