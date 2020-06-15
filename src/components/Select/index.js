import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super();
    }

    renderOptions = () => {
        const newArr = this.props.options.map(item => {
            return (
                <option value={item}>{item}</option>
            )
        })
        return newArr;
    }


    render() {
        return (
            <div className="select">
                <select onChange={(e) => {this.props.onChange(e.target.value)}}>
                   <option>{this.props.name}</option>
                   {this.renderOptions()}
                </select>
            </div>
        )
    }
}

export default Select;