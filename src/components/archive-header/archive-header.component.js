// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import './archive-header.style.scss';

export class ArchiveHeader extends Component {
    constructor() {
        super();

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.index = 0;
       
    }

    componentDidMount(){
        let track = document.querySelector(".track");
        this.numberOfElements = track.querySelectorAll("button").length - 9;
    }
    

    moveRight() {
        if (this.index < this.numberOfElements) {
            let track = document.querySelector(".track");
            this.index++;
            track.style.transform = "translateX( -" + (this.index * 100) + "px )";
        }
    }

    moveLeft() {
        if (this.index > 0) {
            let track = document.querySelector(".track");
            this.index--;
            track.style.transform = "translateX( -" + (this.index * 100) + "px )";
        }
    }

    handleClick(e) {
        this.props.updateContent(e.target.innerHTML)
    }

    render() {
        return (
            <div className="slider-wrap">
                <button onClick={this.moveLeft}>&#60;</button>
                <div className="slider">
                    <div className="track">
                        <button onClick={this.handleClick}>Romana</button>
                        <button onClick={this.handleClick}>Matematica</button>
                        <button onClick={this.handleClick}>Informatica</button>
                        <button onClick={this.handleClick}>Engleza</button>
                        <button onClick={this.handleClick}>Franceza</button>
                        <button onClick={this.handleClick}>Chimie</button>
                        <button onClick={this.handleClick}>Geografie</button>
                        <button onClick={this.handleClick}>Istorie</button>
                        <button onClick={this.handleClick}>Desen</button>
                        <button onClick={this.handleClick}>Muzica</button>
                        <button onClick={this.handleClick}>Sport</button>
                        <button onClick={this.handleClick}>TIC</button>
                        <button onClick={this.handleClick}>Romana</button>
                        <button onClick={this.handleClick}>Matematica</button>
                        <button onClick={this.handleClick}>Informatica</button>
                        <button onClick={this.handleClick}>Engleza</button>
                        <button onClick={this.handleClick}>TIC</button>
                        <button onClick={this.handleClick}>Romana</button>
                    </div>
                </div>
                <button onClick={this.moveRight}>&#62;</button>
            </div>
        )
    }
}