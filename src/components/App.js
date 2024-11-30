import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    buttonClickHandler() {
        this.setState({renderBall: true});
    }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    handleKeyDown(event){
        if(event.key == "ArrowRight" || event.keyCode === 39){
            this.setState((prevState) => {
                const currentLeft = parseInt(prevState.ballPosition.left, 10);
                const playgroundWidth = 400;
                const ballWidth = 50;
                const newLeft = Math.min(currentLeft+5, playgroundWidth-ballWidth);
                return {
                    ballPosition: {left: `${newLeft}px`},
                };
            });
        }
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillMount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
