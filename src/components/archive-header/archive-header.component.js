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
                        <button onClick={this.handleClick}>Romanian</button>
                        <button onClick={this.handleClick}>Mathematics</button>
                        <button onClick={this.handleClick}>Informatics</button>
                        <button onClick={this.handleClick}>English</button>
                        <button onClick={this.handleClick}>French</button>
                        <button onClick={this.handleClick}>Chemistry</button>
                        <button onClick={this.handleClick}>Geography</button>
                        <button onClick={this.handleClick}>History</button>
                        <button onClick={this.handleClick}>Art</button>
                        <button onClick={this.handleClick}>Music</button>
                        <button onClick={this.handleClick}>Sport</button>
                        <button onClick={this.handleClick}>TIC</button>
                        <button onClick={this.handleClick}>Biology</button>
                        <button onClick={this.handleClick}>Religion</button>
                        <button onClick={this.handleClick}>Physics</button>
                    </div>
                </div>
                <button onClick={this.moveRight}>&#62;</button>
            </div>
        )
    }
}