import React from "react";

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.selectVideo(e.target.value);
    }

    render() {
        return(
            <form onClick={this.handleClick}>
              <input type='radio' name='src' value='fast'/>Fast Animals
              <input type='radio' name='src' value='slow'/>Slow Animals
              <input type='radio' name='src' value='cute'/>Cute Animals
              <input type='radio' name='src' value='eek'/>Eek Animals
            </form>
        );
    }
}