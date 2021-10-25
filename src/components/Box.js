import React from "react";


class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className={this.props.icon} {{fontSize: 100, this.props.box}}></span>
                <p>{this.props.value}{this.props.unit}</p>
            </div>
        )
    };
}

export default Box;