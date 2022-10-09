import React, { Component } from 'react'

class Step extends Component {
    render() {
        return (
            <div className='box  col-sm-3 col-6'>
                <span className="material-icons" style={{fontSize: "100px", color: `${this.props.color}`, background: "transparent"}}>{this.props.icon}</span>
                <p>{this.props.value}{this.props.unit}</p>
            </div>
        )
    }
}

export default Step