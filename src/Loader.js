import React from 'react';

const Loder = (props) => {
    return (
        <div className="ui active transition visible inverted dimmer">
            <div className="content">
                <div className="ui inverted text loader">{props.message}</div>
            </div>
        </div>
    )
}
Loder.defaultProps = {
    message: 'Loading...'
}

export default Loder;